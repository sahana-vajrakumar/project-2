# README

FunBrain is the brain child of Linds, Priyanka & Sahana. Group Project.
The main idea was to create fun games for children and make screen time more productive.
The main challenge was to implement the voice API & make a game based on it.




* Ruby version
ruby 2.4.0p0 (2016-12-24 revision 57164)

* System dependencies
None

* Database creation
Models Used: Games | Users | Stats | Questions


Gems Used:
anime_js_rails -> For animations
groupdate      -> For charts & graphs to analyze statistics of User
chartkick      -> For charts & graphs to analyze statistics of User
cloudinary     -> User can upload images and add their questions which can be helpful to add customised
                  new words for their children ot learn


APIs Used:
* Voice Game - Uses 'Web Speech API' to detect our words and display images.



* How to run the test suite
Heroku Link
----------------
https://fun-brain.herokuapp.com/


Testing the website with username & Password
----------------------------------------------
Username: priyanka@mail.com
Password: chicken



Bugs:
* Music game doesnt calculate score or levels
* Math Game is still under development. Need to add levels & better user interface
* Alphabet games needs levels as well(All games have single levels)
* Voice Game needs minor changes
* Bar Graph in Stats doesn't display properly when the user saves a game, other graphs are fine


Wishlist:
* Have more levels in each game.
* Make more animations.
* Make games more creative and fun
