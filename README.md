<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/raymondkneipp/portfolio-2023">
    <img src="public/logo-outline.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Portfolio 2023</h3>

  <p align="center">
		Here is my web development portfolio website built with Astro.js. This portfolio showcases four React websites I have created, shares my skills, and provides a contact form so people can get ahold of me.
    <br />
    <a href="https://github.com/raymondkneipp/portfolio-2023"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://raymondkneipp.com">View Demo</a>
    ·
    <a href="https://github.com/raymondkneipp/portfolio-2023/issues">Report Bug</a>
    ·
    <a href="https://github.com/raymondkneipp/portfolio-2023/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://raymondkneipp.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [React](https://reactjs.org/)
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/raymondkneipp/portfolio-2023.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Get a free EmailJS API Key at [https://www.emailjs.com/](https://www.emailjs.com/)
4.  Add an email service [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
5.  Set `PUBLIC_EMAILJS_SERVICE_ID` to given Service ID in `.env`
6.  Set `PUBLIC_EMAILJS_PUBLIC_KEY` to public key [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)
7.  On the EmailJS website, create an email template with the following

    ```
    Email
    {{email}}

    Message
    {{message}}
    ```

8.  Set `PUBLIC_EMAILJS_TEMPLATE_ID` to template ID in `.env`
9.  Start local server
    ```sh
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Raymond Kneipp - [@rfkquery](https://twitter.com/twitter_handle) - hello@raymondkneipp.com

Project Link: [https://github.com/raymondkneipp/portfolio-2023](https://github.com/raymondkneipp/portfolio-2023)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/raymondkneipp/portfolio-2023.svg?style=for-the-badge
[contributors-url]: https://github.com/raymondkneipp/portfolio-2023/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/raymondkneipp/portfolio-2023.svg?style=for-the-badge
[forks-url]: https://github.com/raymondkneipp/portfolio-2023/network/members
[stars-shield]: https://img.shields.io/github/stars/raymondkneipp/portfolio-2023.svg?style=for-the-badge
[stars-url]: https://github.com/raymondkneipp/portfolio-2023/stargazers
[issues-shield]: https://img.shields.io/github/issues/raymondkneipp/portfolio-2023.svg?style=for-the-badge
[issues-url]: https://github.com/raymondkneipp/portfolio-2023/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/raymondkneipp
[product-screenshot]: public/images/screenshot.png
