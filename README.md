##About
Firetabs is a Firefox extension that lists all your open tabs in one html document, with tab names and page urls.


##Why?
* Lost in dozens of tabs?
* Struggle with Firefox for memory?
* Tabs "just in case"?

Then you know why.

##Features
* Every entry in tab list is hyperlink to page loaded in tab, so you can easily (re)open your tabs
* Tab list can be saved just as regular html file (File --> Save Page As, just make sure to choose "Web Page, complete" as output format). You can later open tab list or share it with someone else (even without Firetabs installed) - it's just single plain html file
* You can remove some tabs (or whole windows) from tab list (red "x") if you don't want to see them (they will not be saved either)
* In list tabs are grouped by windows they belong to for easy navigation
* Tab url is shown as additional hint (in case document title is empty or/and not very informative)

##Install
Firetabs is very young and hosted only here for now, it cannot be found at addons.mozilla.org.
You can install extension manually using this link: [download page]

Or install from .xpi file (previously downloaded from link above or obtained by other means):

1. Open Firefox Extension Manager: Tools --> Addons
2. Click drop-down box in top right corner (near search field) and select "Install addon from file"
3. Point to .xpi file and follow instructions.


##Develop
You are welcome to contribute!

In order to build binary distribution you must have gradle (http://www.gradle.org) installed.
To build .xpi execute

    gradle xpi


##License
   Copyright 2013 sunlaud

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
