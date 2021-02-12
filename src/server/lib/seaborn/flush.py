from classgraph import *


def main():
	ranges = {"start":-2000,"end":2001}
	datalist = generate_data(LinearFunction,ranges)
	datalist2 = generate_data(ExponentialFunction,ranges)
	datalist3 = generate_data(ExponentialFunction1,ranges)
	datalist4 = generate_data(ExponentialFunction2,ranges)
	myobj = Graph('light')
	myobj.adddata(datalist,datalist2,datalist3)


if __name__ == "__main__":
	main()
