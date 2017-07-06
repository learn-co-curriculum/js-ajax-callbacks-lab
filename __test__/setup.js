import fs from 'fs';
import path from 'path';
import jQuery from 'jquery';
import { transform } from 'babel-core';

// Inject the <body> of index.html into the <body> of the test DOM
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
const bodyOpen = html.indexOf('<body>') + 6;
const bodyClose = html.indexOf('</body>');
const body = html.slice(bodyOpen, bodyClose);
document.body.innerHTML = body;

// Inject jQuery
document.defaultView.$ = jQuery;

// Transpile student code
const rawJS = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');
const transpiledJS = transform(rawJS, { presets: ["env"] }).code.replace("'use strict';", '');

// Inject student code
document.defaultView.eval(transpiledJS);