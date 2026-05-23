# Certificate Generator ⚡📑

<h3 align="center">Status: 🚀 Finished</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</p>


## Table of Contents

- [Description](#description)
- [Screenshot](#screenshot)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Clone the repository](#clone-the-repository)
  - [Install dependencies](#install-dependencies)
  - [Run locally](#run-locally)
  - [Build for production](#build-for-production)

## Description

A web application for creating, viewing, and downloading completion certificates. Fill in a participant name and completed activities, generate a styled certificate, and export it as a PNG image. Data is stored in the browser via `localStorage`, so certificates persist across sessions on the same device.

## Screenshot

![Empty List preview](./public/github/empty-list.png)
![Empty Form preview](./public/github/empty-form.png)
![Certificate Generator preview](./public/github/certificate-preview.png)

## Project Structure

```
certificate-generator/
├── public/
├── src/
│   └── app/
│       ├── components/
│       ├── interfaces/
│       ├── pages/
│       └── services/
└── ...
```

## Tech Stack

- Angular 
- TypeScript 
- Bootstrap
- html2canvas

## Requirements

- Node.js (recommended: LTS)
- Angular CLI

## Getting Started

### Clone the repository

```bash
git https://github.com/silvapedrodev/certificate-generator-angular.git
cd certificate-generator-angular
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
ng serve
```

The app will be available at **http://localhost:4200**.

### Build for production

```bash
ng build
```

---
<h3 align="center">This project was made with ❤️ by Pedro Silva</h3>
