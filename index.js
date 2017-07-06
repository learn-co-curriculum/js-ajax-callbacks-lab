const displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.");

const renderCommit = commit => {
  return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`;
}

const renderCommits = data => {
  const result = data.map(commit => renderCommit(commit)).join('');
  return `<ul>${result}</ul>`;
}

const showCommits = repo => {
  $.get(`https://api.github.com/repos/${repo.dataset.owner}/${repo.dataset.repository}/commits`, data => {
    $('#details').html(renderCommits(data));
  }).fail(error => {
    displayError();
  });
}

const renderSearchResult = result => {
  return `
      <div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description ? result.description : ''}</p>
      </div>
      <hr>
    `;
}

const renderSearchResults = data => data.items.map(result => renderSearchResult(result));

const searchRepositories = () => {
  const searchTerms = $('#searchTerms').val();

  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $('#results').html(renderSearchResults(data));
  }).fail(error => {
    displayError();
  });
}

$(document).ready(() => {
  document.getElementById('searchRepositories').addEventListener('click', e => {
    e.preventDefault();
    searchRepositories();
  });
});