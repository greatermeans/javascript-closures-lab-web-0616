const app = "I don't do much."

function bumpCounter() {
	var counter = 0

	function addBump(argument) {
		counter += 1
	}
	function getBumps(argument) {
		return counter
	}

	return {
		addBump,
		getBumps
	}
}

function createAnimal(animalType) {
	return ((deadlyDevice) => {
		var obj = {}
		{
			obj.animalType = animalType
			obj.deadlyDevice = deadlyDevice
		}
		return obj
	})
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')