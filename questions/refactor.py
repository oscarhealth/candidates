import datetime
import time


class Thing:

    def __init__(self):
        self.name = ''
        self.birth_date = datetime.datetime.now()

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_birth_date(self):
        return self.birth_date

    def set_birth_date(self, birth_date):
        self.birth_date = birth_date


class F:

    def __init__(self):
        self.p1 = Thing()
        self.p2 = Thing()
        self.d = 0


class FT:

    ONE = 1
    TWO = 2


class Finder:

    def __init__(self, p):
        self.p = p

    def find(self, ft):
        tr = []

        for i in range(0, len(self.p) - 1):
            for j in range(i + 1, len(self.p)):
                r = F()
                if time.mktime(self.p[i].birth_date.timetuple()) < time.mktime(self.p[j].birth_date.timetuple()):
                    r.p1 = self.p[i]
                    r.p2 = self.p[j]
                else:
                    r.p1 = self.p[j]
                    r.p2 = self.p[i]
                r.d = time.mktime(r.p2.birth_date.timetuple()) - time.mktime(r.p1.birth_date.timetuple())
                tr.append(r)

        if len(tr) < 1:
            return F()

        answer = tr[0]
        for result in tr:
            if ft == FT.ONE:
                if result.d < answer.d:
                    answer = result
            elif ft == FT.TWO:
                if result.d > answer.d:
                    answer = result
        return answer
