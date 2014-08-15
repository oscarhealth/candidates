import datetime
from refactor import Thing, Finder, FT


sue = Thing()
greg = Thing()
sarah = Thing()
mike = Thing()

sue.name = "Sue"
sue.birth_date = datetime.date(1950, 1, 1)
greg.name = "Greg"
greg.birth_date = datetime.date(1952, 6, 1)
sarah.name = "Sarah"
sarah.birth_date = datetime.date(1982, 1, 1)
mike.name = "Mike"
mike.birth_date = datetime.date(1979, 1, 1)

a = [sue, sarah, mike, greg]
f = Finder(a)
assert f.find(FT.ONE).p1.name == 'Sue'
assert f.find(FT.ONE).p2.name == 'Greg'
assert f.find(FT.TWO).p1.name == 'Sue'
assert f.find(FT.TWO).p2.name == 'Sarah'
