
User.destroy_all

u1 = User.create name:'Priyanka', email: 'priyanka@mail.com', password: 'chicken', icon: 'http://www.kidsworldfun.com/images/story-contest/funny-laughing-girl.png'
u2 = User.create name: 'Sahana', email:'sahana@mail.com', password: 'chicken', icon: 'http://www.clker.com/cliparts/P/0/s/w/H/D/girl-face-cartoon-md.png'
u3 = User.create name: 'Linda', email:'linda@mail.com', password: 'chicken', icon: 'https://ih1.redbubble.net/image.120565732.7832/sticker,375x360-bg,ffffff.u2.png'

puts "Created #{ User.all.length } users."


Game.destroy_all

g1 = Game.create category: 'english', speeds: 1, levels: 2
g2 = Game.create category: 'maths', speeds: 1, levels: 2
g3 = Game.create category: 'music', speeds: 1, levels: 2
g4 = Game.create category: 'voice', speeds: 1, levels: 2

puts "Created #{ Game.all.length } games."

Question.destroy_all

q1 = Question.create game: g4, question: "https://media.giphy.com/media/OoZbGs4S4Q9oI/giphy.gif" , answer: "duck"
q2 = Question.create game: g4, question: "http://www.animatedimages.org/data/media/202/animated-dog-image-0712.gif" , answer: "dog"
q3 = Question.create game: g4, question: "http://bestanimations.com/Animals/Mammals/Elephants/elephantclipart/cute-elephant-animated-clip-art-gif-2.gif" , answer: "elephant"
q4 = Question.create game: g4, question: "http://laoblogger.com/images/3d-cartoon-clipart-hd-6.jpg" , answer:"lion"
q5 = Question.create game: g4, question: "http://78.media.tumblr.com/tumblr_m6srdkC8m21qgd7tso1_500.gif" , answer:"Amir"
q6 = Question.create game: g1, question: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


puts "Created #{ Question.all.length } questions."

Stat.destroy_all

s1 = Stat.create score: 10, average_time: 2.0, accuracy: 86, level: 1, user: u1, game: g1, created_at: Date.today - 7.days
s2 = Stat.create score: 12, average_time: 1.2, accuracy: 78, level: 1, user: u1, game: g1, created_at: Date.today - 6.days
s3 = Stat.create score: 5, average_time: 1.3, accuracy: 69, level: 1, user: u1, game: g1, created_at: Date.today - 5.days
s4 = Stat.create score: 3, average_time: 2.5, accuracy: 76, level: 1, user: u1, game: g1, created_at: Date.today - 4.days
s5 = Stat.create score: 19, average_time: 1.0, accuracy: 87, level: 1, user: u1, game: g1, created_at: Date.today - 3.days
s6 = Stat.create score: 6, average_time: 1.5, accuracy: 92, level: 1, user: u1, game: g1, created_at: Date.today - 2.days
s7 = Stat.create score: 11, average_time: 1.8, accuracy: 99, level: 1, user: u1, game: g1, created_at: Date.today - 1.days

s8 = Stat.create score: 1, average_time: 2.7, accuracy: 93, level: 1, user: u1, game: g2, created_at: Date.today - 7.days
s9 = Stat.create score: 3, average_time: 3.2, accuracy: 51, level: 1, user: u1, game: g2, created_at: Date.today - 6.days
s10 = Stat.create score: 18, average_time: 4.3, accuracy: 57, level: 1, user: u1, game: g2, created_at: Date.today - 5.days
s11 = Stat.create score: 10, average_time: 3.1, accuracy: 61, level: 1, user: u1, game: g2, created_at: Date.today - 4.days
s12 = Stat.create score: 4, average_time: 2.3, accuracy: 79, level: 1, user: u1, game: g2, created_at: Date.today - 3.days
s13 = Stat.create score: 14, average_time: 3.7, accuracy: 83, level: 1, user: u1, game: g2, created_at: Date.today - 2.days
s14 = Stat.create score: 7, average_time: 1.9, accuracy: 70, level: 1, user: u1, game: g2, created_at: Date.today - 1.days

s15 = Stat.create score: 30, average_time: 5.6, accuracy: 23, level: 1, user: u1, game: g3, created_at: Date.today - 7.days
s16 = Stat.create score: 24, average_time: 3.9, accuracy: 31, level: 1, user: u1, game: g3, created_at: Date.today - 6.days
s17 = Stat.create score: 46, average_time: 4.1, accuracy: 27, level: 1, user: u1, game: g3, created_at: Date.today - 5.days
s18 = Stat.create score: 38, average_time: 10.3, accuracy: 41, level: 1, user: u1, game: g3, created_at: Date.today - 4.days
s19 = Stat.create score: 28, average_time: 9.3, accuracy: 59, level: 1, user: u1, game: g3, created_at: Date.today - 3.days
s20 = Stat.create score: 39, average_time: 7.2, accuracy: 63, level: 1, user: u1, game: g3, created_at: Date.today - 2.days
s21 = Stat.create score: 26, average_time: 4.8, accuracy: 76, level: 1, user: u1, game: g3, created_at: Date.today - 1.days

s22 = Stat.create score: 24, average_time: 7.1, accuracy: 32, level: 1, user: u1, game: g4, created_at: Date.today - 7.days
s23 = Stat.create score: 35, average_time: 9.5, accuracy: 42, level: 1, user: u1, game: g4, created_at: Date.today - 6.days
s24 = Stat.create score: 18, average_time: 11.2, accuracy: 40, level: 1, user: u1, game: g4, created_at: Date.today - 5.days
s25 = Stat.create score: 25, average_time: 4.4, accuracy: 52, level: 1, user: u1, game: g4, created_at: Date.today - 4.days
s26 = Stat.create score: 38, average_time: 6.8, accuracy: 49, level: 1, user: u1, game: g4, created_at: Date.today - 3.days
s27 = Stat.create score: 44, average_time: 7.5, accuracy: 63, level: 1, user: u1, game: g4, created_at: Date.today - 2.days
s28 = Stat.create score: 31, average_time: 13.2, accuracy: 88, level: 1, user: u1, game: g4, created_at: Date.today - 1.days


s29 = Stat.create score: 10, average_time: 2.0, accuracy: 86, level: 1, user: u2, game: g1, created_at: Date.today - 7.days
s30 = Stat.create score: 12, average_time: 1.2, accuracy: 78, level: 1, user: u2, game: g1, created_at: Date.today - 6.days
s31 = Stat.create score: 5, average_time: 1.3, accuracy: 69, level: 1, user: u2, game: g1, created_at: Date.today - 5.days
s32 = Stat.create score: 3, average_time: 2.5, accuracy: 76, level: 1, user: u2, game: g1, created_at: Date.today - 4.days
s33 = Stat.create score: 19, average_time: 1.0, accuracy: 87, level: 1, user: u2, game: g1, created_at: Date.today - 3.days
s34 = Stat.create score: 6, average_time: 1.5, accuracy: 92, level: 1, user: u2, game: g1, created_at: Date.today - 2.days
s35 = Stat.create score: 11, average_time: 1.8, accuracy: 99, level: 1, user: u2, game: g1, created_at: Date.today - 1.days

s36 = Stat.create score: 1, average_time: 2.7, accuracy: 93, level: 1, user: u2, game: g2, created_at: Date.today - 7.days
s37 = Stat.create score: 3, average_time: 3.2, accuracy: 51, level: 1, user: u2, game: g2, created_at: Date.today - 6.days
s38 = Stat.create score: 18, average_time: 4.3, accuracy: 57, level: 1, user: u2, game: g2, created_at: Date.today - 5.days
s39 = Stat.create score: 10, average_time: 3.1, accuracy: 61, level: 1, user: u2, game: g2, created_at: Date.today - 4.days
s40 = Stat.create score: 4, average_time: 2.3, accuracy: 79, level: 1, user: u2, game: g2, created_at: Date.today - 3.days
s41 = Stat.create score: 14, average_time: 3.7, accuracy: 83, level: 1, user: u2, game: g2, created_at: Date.today - 2.days
s42 = Stat.create score: 7, average_time: 1.9, accuracy: 70, level: 1, user: u2, game: g2, created_at: Date.today - 1.days

s43 = Stat.create score: 30, average_time: 5.6, accuracy: 23, level: 1, user: u2, game: g3, created_at: Date.today - 7.days
s44 = Stat.create score: 24, average_time: 3.9, accuracy: 31, level: 1, user: u2, game: g3, created_at: Date.today - 6.days
s45 = Stat.create score: 46, average_time: 4.1, accuracy: 27, level: 1, user: u2, game: g3, created_at: Date.today - 5.days
s46 = Stat.create score: 38, average_time: 10.3, accuracy: 41, level: 1, user: u2, game: g3, created_at: Date.today - 4.days
s47 = Stat.create score: 28, average_time: 9.3, accuracy: 59, level: 1, user: u2, game: g3, created_at: Date.today - 3.days
s48 = Stat.create score: 39, average_time: 7.2, accuracy: 63, level: 1, user: u2, game: g3, created_at: Date.today - 2.days
s49 = Stat.create score: 26, average_time: 4.8, accuracy: 76, level: 1, user: u2, game: g3, created_at: Date.today - 1.days

s50 = Stat.create score: 24, average_time: 7.1, accuracy: 32, level: 1, user: u2, game: g4, created_at: Date.today - 7.days
s51 = Stat.create score: 35, average_time: 9.5, accuracy: 42, level: 1, user: u2, game: g4, created_at: Date.today - 6.days
s52 = Stat.create score: 18, average_time: 11.2, accuracy: 40, level: 1, user: u2, game: g4, created_at: Date.today - 5.days
s53 = Stat.create score: 25, average_time: 4.4, accuracy: 52, level: 1, user: u2, game: g4, created_at: Date.today - 4.days
s54 = Stat.create score: 38, average_time: 6.8, accuracy: 49, level: 1, user: u2, game: g4, created_at: Date.today - 3.days
s55 = Stat.create score: 44, average_time: 7.5, accuracy: 63, level: 1, user: u2, game: g4, created_at: Date.today - 2.days
s56 = Stat.create score: 31, average_time: 13.2, accuracy: 88, level: 1, user: u2, game: g4, created_at: Date.today - 1.days


s57 = Stat.create score: 10, average_time: 2.0, accuracy: 86, level: 1, user: u3, game: g1, created_at: Date.today - 7.days
s58 = Stat.create score: 12, average_time: 1.2, accuracy: 78, level: 1, user: u3, game: g1, created_at: Date.today - 6.days
s59 = Stat.create score: 5, average_time: 1.3, accuracy: 69, level: 1, user: u3, game: g1, created_at: Date.today - 5.days
s60 = Stat.create score: 3, average_time: 2.5, accuracy: 76, level: 1, user: u3, game: g1, created_at: Date.today - 4.days
s61 = Stat.create score: 19, average_time: 1.0, accuracy: 87, level: 1, user: u3, game: g1, created_at: Date.today - 3.days
s62 = Stat.create score: 6, average_time: 1.5, accuracy: 92, level: 1, user: u3, game: g1, created_at: Date.today - 2.days
s63 = Stat.create score: 11, average_time: 1.8, accuracy: 99, level: 1, user: u3, game: g1, created_at: Date.today - 1.days

s64 = Stat.create score: 1, average_time: 2.7, accuracy: 93, level: 1, user: u3, game: g2, created_at: Date.today - 7.days
s65 = Stat.create score: 3, average_time: 3.2, accuracy: 51, level: 1, user: u3, game: g2, created_at: Date.today - 6.days
s66 = Stat.create score: 18, average_time: 4.3, accuracy: 57, level: 1, user: u3, game: g2, created_at: Date.today - 5.days
s67 = Stat.create score: 10, average_time: 3.1, accuracy: 61, level: 1, user: u3, game: g2, created_at: Date.today - 4.days
s68 = Stat.create score: 4, average_time: 2.3, accuracy: 79, level: 1, user: u3, game: g2, created_at: Date.today - 3.days
s69 = Stat.create score: 14, average_time: 3.7, accuracy: 83, level: 1, user: u3, game: g2, created_at: Date.today - 2.days
s70 = Stat.create score: 7, average_time: 1.9, accuracy: 70, level: 1, user: u3, game: g2, created_at: Date.today - 1.days

s71 = Stat.create score: 30, average_time: 5.6, accuracy: 23, level: 1, user: u3, game: g3, created_at: Date.today - 7.days
s72 = Stat.create score: 24, average_time: 3.9, accuracy: 31, level: 1, user: u3, game: g3, created_at: Date.today - 6.days
s73 = Stat.create score: 46, average_time: 4.1, accuracy: 27, level: 1, user: u3, game: g3, created_at: Date.today - 5.days
s74 = Stat.create score: 38, average_time: 10.3, accuracy: 41, level: 1, user: u3, game: g3, created_at: Date.today - 4.days
s75 = Stat.create score: 28, average_time: 9.3, accuracy: 59, level: 1, user: u3, game: g3, created_at: Date.today - 3.days
s76 = Stat.create score: 39, average_time: 7.2, accuracy: 63, level: 1, user: u3, game: g3, created_at: Date.today - 2.days
s77 = Stat.create score: 26, average_time: 4.8, accuracy: 76, level: 1, user: u3, game: g3, created_at: Date.today - 1.days

s78 = Stat.create score: 24, average_time: 7.1, accuracy: 32, level: 1, user: u3, game: g4, created_at: Date.today - 7.days
s79 = Stat.create score: 35, average_time: 9.5, accuracy: 42, level: 1, user: u3, game: g4, created_at: Date.today - 6.days
s80 = Stat.create score: 18, average_time: 11.2, accuracy: 40, level: 1, user: u3, game: g4, created_at: Date.today - 5.days
s81 = Stat.create score: 25, average_time: 4.4, accuracy: 52, level: 1, user: u3, game: g4, created_at: Date.today - 4.days
s82 = Stat.create score: 38, average_time: 6.8, accuracy: 49, level: 1, user: u3, game: g4, created_at: Date.today - 3.days
s83 = Stat.create score: 44, average_time: 7.5, accuracy: 63, level: 1, user: u3, game: g4, created_at: Date.today - 2.days
s84 = Stat.create score: 31, average_time: 13.2, accuracy: 88, level: 1, user: u3, game: g4, created_at: Date.today - 1.days


puts "Created #{ Stat.all.length } stats."

#
# u1.stats << s1 << s2
# u2.stats << s3
# u3.stats << s4 << s5
#
# g1.stats << s1
# g2.stats << s4
# g3.stats << s2 << s5
# g4.stats << s3
