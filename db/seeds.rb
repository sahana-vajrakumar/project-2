
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

s1 = Stat.create score: 10, average_time: 2, accuracy: 56, level: 1, user: u1, game: g1, created_at: Date.today - 7.days
s2 = Stat.create score: 12, average_time: 1.2, accuracy: 78, level: 1, user: u1, game: g1, created_at: Date.today - 6.days
s3 = Stat.create score: 5, average_time: 1.3, accuracy: 49, level: 1, user: u1, game: g1, created_at: Date.today - 5.days
s4 = Stat.create score: 3, average_time: 2.5, accuracy: 32, level: 1, user: u1, game: g1, created_at: Date.today - 4.days
s5 = Stat.create score: 19, average_time: 1.0, accuracy: 99, level: 1, user: u1, game: g1, created_at: Date.today - 3.days
s6 = Stat.create score: 6, average_time: 1.5, accuracy: 85, level: 1, user: u1, game: g1, created_at: Date.today - 2.days
s7 = Stat.create score: 11, average_time: 1.8, accuracy: 61, level: 1, user: u1, game: g1, created_at: Date.today - 1.days


s8 = Stat.create score: 1, average_time: 2.7, accuracy: 23, level: 1, user: u1, game: g2, created_at: Date.today - 7.days
s9 = Stat.create score: 3, average_time: 3.2, accuracy: 51, level: 1, user: u1, game: g2, created_at: Date.today - 6.days
s10 = Stat.create score: 18, average_time: 4.3, accuracy: 57, level: 1, user: u1, game: g2, created_at: Date.today - 5.days
s11 = Stat.create score: 10, average_time: 3.1, accuracy: 61, level: 1, user: u1, game: g2, created_at: Date.today - 4.days
s12 = Stat.create score: 4, average_time: 2.3, accuracy: 79, level: 1, user: u1, game: g2, created_at: Date.today - 3.days
s13 = Stat.create score: 14, average_time: 3.7, accuracy: 83, level: 1, user: u1, game: g2, created_at: Date.today - 2.days
s14 = Stat.create score: 7, average_time: 1.9, accuracy: 70, level: 1, user: u1, game: g2, created_at: Date.today - 1.days


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
