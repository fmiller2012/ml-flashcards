# Web Development Project 2 - *Machine Learning Whiz! Flashcards*

Submitted by: **Faraji Miller**

This web app: **This app tests student aptitude over basic machine learning concepts using flashcards.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] *visual style implemented*

The following **additional** features are implemented:

* [x] Added additional visual CSS elements to enhancing visual experience

## Video Walkthrough

Here's a walkthrough of implemented required features:

![GIF showcasing functionality](./Project2.gif)
<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ez-gif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

There were multiple noted challenges. But most of all was trying to understand functional component order and structure which seems very different from the typical object-oriented programming that Java, and Python train.
It is very odd putting all of the information into the main component (App.jsx) and leaving the child components with very little. 
In Java, and Python it is actually the opposite - the main class is to have very little to lessen the complexity of what the reader needs to see or understand. While the other classes carry the brunt of the programming information and complexity. Also known as abstraction. 
React seems to prefer the direct opposite. Hooks and useState() still don't make sense coming from an OOP point of view. It seems like nothing more than a class variable. Perhaps this is the functional programming way of dealiing with class variables since the variables seem to be fairly limited to either const or let? I have a lot of gaps in my knowledge that I need to make up for.

## License

    Copyright [2025] [Faraji Miller]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
