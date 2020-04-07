```
class Point2D {
	constructor (x, y) {
		this.x = x
    this.y = y
  }

  toString () {
    return `${this.x}和${this.y}`
  }
}

class Point3D extends Point2D {
	constructor (x, y, z) {
		super(x, y)
		this.z = z
  }

  toString () {
    return `${this.x}和${this.y}和${this.z}`
  }
}

const a = new Point2D(1, 2)
console.log(a.x, a.y, a.toString())

const b = new Point3D(3, 4, 5)
console.log(b.x, b.y, b.z, b.toString())
```
