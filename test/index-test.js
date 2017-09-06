const expect = chai.expect;

describe('index.js', () => {
  describe('index.html', () => {
    it('has the right elements', () => {
      expect(document.getElementsByTagName('a')[0].innerHTML).to.match(/(S|s)earch/)
      expect(document.getElementById('searchTerms')).to.exist
      expect(document.getElementById('results')).to.exist
      expect(document.getElementById('details')).to.exist
    })
  })

  describe('displayError', () => {
    it('sets the errors div content', () => {
      displayError()
      expect(window.$('#errors').html()).to.match(/error/)
    })
  })

  describe('ajax functions', () => {
    let xhr, requests

    before(() => {
      xhr = sinon.useFakeXMLHttpRequest()
      window.XMLHttpRequest = xhr
      xhr.onCreate = function (req) { requests.push(req); }
    })
    beforeEach(() => {
      requests = []
    })
    after(() => {
      xhr.restore()
    })

    describe('searchRepositories', () => {
      it('calls out to the github search API and displays results', () => {
        window.$('#searchTerms').val('tetris')
        searchRepositories()
        requests[0].respond(200, contentType, resultsData())
        expect(requests[0].url).to.match(/https:\/\/api.github.com\/search\/repositories\?q=tetris/)
        expect(window.$('#results').html()).to.match(/Tetris/)
      })
    })

    describe('showCommits', () => {
      it('calls the github commits api and displays results', () => {
        const el = { dataset: { repository: "repo", owner: "owner" } }
        showCommits(el)
        requests[0].respond(200, contentType, commitsData())
        expect(requests[0].url).to.match(/https:\/\/api.github.com\/repos\/owner\/repo\/commits/)
        expect(window.$('#details').html()).to.match(/6dcb09b5b57875f334f61aebed695e2e4193db5e/)
      })
    })
  })
})

const contentType = { "Content-Type": "application/json" }

function commitsData() {
  const commits = [
  {
    "url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
    "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e",
    "html_url": "https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments",
    "commit": {
      "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
      "author": {
        "name": "Monalisa Octocat",
        "email": "support@github.com",
        "date": "2011-04-14T16:00:49Z"
      },
      "committer": {
        "name": "Monalisa Octocat",
        "email": "support@github.com",
        "date": "2011-04-14T16:00:49Z"
      },
      "message": "Fix all the bugs",
      "tree": {
        "url": "https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
      },
      "comment_count": 0,
      "verification": {
        "verified": true,
        "reason": "valid",
        "signature": "-----BEGIN PGP MESSAGE-----\n...\n-----END PGP MESSAGE-----",
        "payload": "tree 6dcb09b5b57875f334f61aebed695e2e4193db5e\n..."
      }
    },
    "author": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
        }
      ]
    }
  ]
  return(JSON.stringify(commits))
}
function resultsData() {
  const results = {
    "total_count": 40,
    "incomplete_results": false,
    "items": [
      {
        "id": 3081286,
        "name": "Tetris",
        "full_name": "dtrupenn/Tetris",
        "owner": {
          "login": "dtrupenn",
          "id": 872147,
          "avatar_url": "https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
          "gravatar_id": "",
          "url": "https://api.github.com/users/dtrupenn",
          "received_events_url": "https://api.github.com/users/dtrupenn/received_events",
          "type": "User"
        },
        "private": false,
        "html_url": "https://github.com/dtrupenn/Tetris",
        "description": "A C implementation of Tetris using Pennsim through LC4",
        "fork": false,
        "url": "https://api.github.com/repos/dtrupenn/Tetris",
        "created_at": "2012-01-01T00:31:50Z",
        "updated_at": "2013-01-05T17:58:47Z",
        "pushed_at": "2012-01-01T00:37:02Z",
        "homepage": "",
        "size": 524,
        "stargazers_count": 1,
        "watchers_count": 1,
        "language": "Assembly",
        "forks_count": 0,
        "open_issues_count": 0,
        "master_branch": "master",
        "default_branch": "master",
        "score": 10.309712
      }
    ]
  }
  return JSON.stringify(results)
}
