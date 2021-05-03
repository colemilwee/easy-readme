// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "none"){
    return "";
  }
  else{
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

${renderLicenseBadge(data.license)}

  ## Table of contents

* [description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#contributions)
* [Testing](#Testing)
* [Credits](#Credits) 
* [Contact](#Contacts)

 
  ##Description

${data.description}


  ##Installation
${data.installation}

  ##Usage

${data.usage}

  ##Contributions

${data.contributions}

  ##Testing

${data.tests}

  ##Credits

${data.credits}

  ##Contacts

github.com/${data.github}:

  you can reach me for questions via email: 

${data.email}

`;
}

export default generateMarkdown;

