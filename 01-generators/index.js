function* fibonnaci() {
  var last = 0
  var current = 1
  var temp
  while (true) {
    yield current
    temp = last + current
    last = current
    current = temp
  }
}

function* take(list, n) {
  var i = 0
  for (var x of list) {
    if (n === i++) {
      return
    }
    yield x
  }
}

for (var x of take(fibonnaci(), 5)) {
  console.log(x)
}

    function fibonnaci2(n) {
      var last = 0
      var current = 1
      var temp
      var res = []
      while (0 < n--) {
        res.push(current)
        temp = last + current
        last = current
        current = temp
      }
      return res
    }

    var res = fibonnaci2(5)
    for (var i = 0; i < res.length; i++) {
      console.log(res[i])
    }