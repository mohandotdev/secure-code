# SecureCode.

SecureCode. is an application designed to help code security by pinpointing vulnerabilities.

With the help of Cloudflare AI Model, Our app detects various parameters crucial for securing your codebase:

**Vulnerability Type:** Indicate the type of vulnerability detected in the code snippet (e.g., SQL injection, cross-site scripting, buffer overflow).

**Severity Level:** Assign a severity level to each detected vulnerability (e.g., critical, high, medium, low) to prioritize remediation efforts.

**Location:** Highlight the specific location within the code where the vulnerability was detected (e.g., line number, function name, file name) to facilitate debugging and fixing.

**Explanation:** Provide a brief explanation or description of the detected vulnerability, including how it could potentially be exploited and its impact on security.

**Recommendations:** Offer recommendations or suggested fixes to address the detected vulnerabilities, such as code changes or security best practices to follow.

**Overall Security Percentage:** Return the overall security percentage of the given code.

## Tech Stack

This project uses the following technologies:

- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **ReactJS**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language this project is primarily written in.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm

### Installation

A step-by-step series of examples that tell you how to get a development environment running:

Clone the repo: 
 ```sh
 git clone https://github.com/mohandotdev/secure-code.git
 ```
Change the working directory: 
 ```sh
 cd client
 ```
Install NPM packages: 
 ```sh
 npm install
 ```
Start the development server:: 
```sh
npm run dev
```
