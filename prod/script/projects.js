"use strict";
// Sample API URL: https://api.github.com/repos/furry/2captcha
async function getRepoInfo(username, reponame) {
    const res = await fetch(`https://api.github.com/repos/${username}/${reponame}`)
        .then(response => response.json());
    return res;
}
