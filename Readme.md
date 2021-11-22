## Introduction

This is a simple React Native App that consumes the Pexels public API and displays a list of images.
You can click on a certain image to see some details like photographer and primary color.

## Project structure
The project structure is very simple. We are using react native navigation and we have 2 main routes, the image list and the image details.

We have also some components in order to reuse them in the main screens.

## Project Scope

I kept the project simple for this demo as the end goal is to demonstrate my react skills.
If you want to see more functionalities please check my side project called Rizo App in the following link that I build all by myself:
https://apps.apple.com/app/id1494981202

## Project setup

Start by setting the right nodeJs version to run the project
### `nvm use`

Install the dependencies
### `npm install`

Pull the common repository submodule using the following commands in this order:
### `git submodule update --recursive --init`
### `git submodule update --recursive --remote`

Run the project on your local machine (I've only tested it on an IOS Iphone Simulator). In order for the app to look nice on Android some css adjustments may be needed.
### `react-native run-ios`

## Submodules

This repository depends on this other one as a submodule.
https://github.com/nasy/photobooth-common

To create the submodule I've used:
git submodule add git@github.com:nasy/photobooth-common.git common