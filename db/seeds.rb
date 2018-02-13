
User.destroy_all

u1 = User.create name:'Priyanka', email: 'priyanka@mail.com', password: 'chicken'
u2 = User.create name: 'Sahana', email:'sahana@mail.com', password: 'chicken'
u3 = User.create name: 'Linda', email:'linda@mail.com', password: 'chicken'

puts "Created #{ User.all.length } users."


Game.destroy_all

g1 = Game.create category: 0, speed: 1, level: 0
g2 = Game.create category: 0, speed: 2, level: 0
g3 = Game.create category: 0, speed: 3, level: 0
g4 = Game.create category: 0, speed: 1, level: 1
g5 = Game.create category: 1, speed: 1, level: 0
g6 = Game.create category: 1, speed: 2, level: 0
g7 = Game.create category: 1, speed: 1, level: 1
g8 = Game.create category: 2, speed: 2, level: 1


puts "Created #{ Game.all.length } games."

Stat.destroy_all

s1 = Stat.create score: 10, average_time: 2, accuracy: 56
s2 = Stat.create score: 12, average_time: 1.2, accuracy: 78
s3 = Stat.create score: 5, average_time: 1.3, accuracy: 49
s4 = Stat.create score: 3, average_time: 2.5, accuracy: 32
s5 = Stat.create score: 19, average_time: 1.0, accuracy: 99
s6 = Stat.create score: 2, average_time: 4.0, accuracy: 21
s7 = Stat.create score: 15, average_time: 3.2, accuracy: 35
s8 = Stat.create score: 21, average_time: 3.9, accuracy: 67
s9 = Stat.create score: 13, average_time: 2.8, accuracy: 57
s10 = Stat.create score: 25, average_time: 2.6, accuracy: 85

puts "Created #{ Stat.all.length } stats."


u1.stats << s1 << s2 << s7 << s9 << s10
u2.stats << s3 << s6 << s8
u3.stats << s4 << s5

g1.stats << s1
g2.stats << s4
g3.stats << s2 << s5
g4.stats << s3
g5.stats << s6
g6.stats << s9
g7.stats << s8
g8.stats << s7 << s10
