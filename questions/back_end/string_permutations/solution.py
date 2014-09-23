def permutations(string):
	if len(string) == 1:
		return [string]
	results_n = []
	first_character = string[:1]
	for results_n_minus_one in permutations(string[1:]):
		for i in xrange(len(results_n_minus_one) + 1):
			results_n.append(results_n_minus_one[:i] + first_character + results_n_minus_one[i:])
	return results_n

perms = permutations("abc")
print len(perms), perms  # prints: 6 ['abc', 'bac', 'bca', 'acb', 'cab', 'cba']


