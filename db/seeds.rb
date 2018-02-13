
User.destroy_all

u1 = User.create name:'Priyanka', email: 'priyanka@mail.com', password: 'chicken'
u2 = User.create name: 'Sahana', email:'sahana@mail.com', password: 'chicken'
u3 = User.create name: 'Linda', email:'linda@mail.com', password: 'chicken'

puts "Created #{ User.all.length } users."


Game.destroy_all

g1 = Game.create category: 1, speed: 2, level: 1
g2 = Game.create category: 1, speed: 5, level: 1
g3 = Game.create category: 2, speed: 7, level: 1
g4 = Game.create category: 3, speed: 6, level: 2

puts "Created #{ Game.all.length } games."

Stat.destroy_all

s1 = Stat.create score: 10, average_time: 2, accuracy: 56
s2 = Stat.create score: 12, average_time: 1.2, accuracy: 78
s3 = Stat.create score: 5, average_time: 1.3, accuracy: 49
s4 = Stat.create score: 3, average_time: 2.5, accuracy: 32
s5 = Stat.create score: 19, average_time: 3.0, accuracy: 99

puts "Created #{ Stat.all.length } stats."


u1.stats << s1 << s2
u2.stats << s3
u3.stats << s4 << s5

g1.stats << s1
g2.stats << s4
g3.stats << s2 << s5
g4.stats << s3
