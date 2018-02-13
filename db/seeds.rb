
User.destroy_all

u1 = User.create name:'Priyanka', email: 'priyanka@mail.com', password: 'chicken', icon: 'https://image.flaticon.com/icons/svg/53/53129.svg'
u2 = User.create name: 'Sahana', email:'sahana@mail.com', password: 'chicken', icon: 'https://image.flaticon.com/icons/svg/53/53129.svg'
u3 = User.create name: 'Linda', email:'linda@mail.com', password: 'chicken', icon: 'https://image.flaticon.com/icons/svg/53/53129.svg'

puts "Created #{ User.all.length } users."


Game.destroy_all

g1 = Game.create category: 'english', speeds: 1, levels: 2
g2 = Game.create category: 'maths', speeds: 1, levels: 2
g3 = Game.create category: 'music', speeds: 1, levels: 2
g4 = Game.create category: 'code', speeds: 1, levels: 2


puts "Created #{ Game.all.length } games."

Stat.destroy_all

s1 = Stat.create score: 10, average_time: 2, accuracy: 56, level: 1
s2 = Stat.create score: 12, average_time: 1.2, accuracy: 78, level: 2
s3 = Stat.create score: 5, average_time: 1.3, accuracy: 49, level: 1
s4 = Stat.create score: 3, average_time: 2.5, accuracy: 32, level: 1
s5 = Stat.create score: 19, average_time: 1.0, accuracy: 99, level: 2

puts "Created #{ Stat.all.length } stats."


u1.stats << s1 << s2
u2.stats << s3
u3.stats << s4 << s5

g1.stats << s1
g2.stats << s4
g3.stats << s2 << s5
g4.stats << s3
