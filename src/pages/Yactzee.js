import React, { useState } from "react"
import D1 from "../img/d1.jpg"
import D2 from "../img/d2.jpg"
import D3 from "../img/d3.jpg"
import D4 from "../img/d4.jpg"
import D5 from "../img/d5.jpg"
import D6 from "../img/d6.jpg"
import { Form, Button } from "react-bootstrap"

function Ya() {
  const [dice1, setdice1] = useState(1)
  const [dice2, setdice2] = useState(1)
  const [dice3, setdice3] = useState(1)
  const [dice4, setdice4] = useState(1)
  const [dice5, setdice5] = useState(1)

  const [sel1, setsel1] = useState(false)
  const [sel2, setsel2] = useState(false)
  const [sel3, setsel3] = useState(false)
  const [sel4, setsel4] = useState(false)
  const [sel5, setsel5] = useState(false)

  const [turn, setturn] = useState(0)
  const [player, setplayer] = useState(2)
  const [re, setre] = useState(2)
  function rollDice() {
    return 1 + Math.floor(Math.random() * 6)
  }
  function setup() {
    if (turn === 0) {
      setturn(1)
      let arr = []
      let sc = []
      for (let i = 1; i <= player; i++) {
        let e = []
        sc[i] = 0
        e[0] = 0
        for (let index = 1; index < 14; index++) {
          e[index] = -1
        }
        arr[i] = e
      }
      setallscore(sc)
      setbyscore(arr)
    } else {
      if (turn + 1 > player) {
        if (
          byscore[1][1] !== -1 &&
          byscore[1][2] !== -1 &&
          byscore[1][3] !== -1 &&
          byscore[1][4] !== -1 &&
          byscore[1][5] !== -1 &&
          byscore[1][6] !== -1 &&
          byscore[1][7] !== -1 &&
          byscore[1][8] !== -1 &&
          byscore[1][9] !== -1 &&
          byscore[1][10] !== -1 &&
          byscore[1][11] !== -1 &&
          byscore[1][12] !== -1 &&
          byscore[1][13] !== -1
        ) {
        } else {
          setturn(1)
        }
      } else {
        setturn(turn + 1)
      }
    }
    setdice1(rollDice)
    setdice2(rollDice)
    setdice3(rollDice)
    setdice4(rollDice)
    setdice5(rollDice)
  }
  function Diceset(d) {
    switch (d) {
      case 1:
        return <img src={D1} alt="1" />
      case 2:
        return <img src={D2} alt="2" />
      case 3:
        return <img src={D3} alt="3" />
      case 4:
        return <img src={D4} alt="4" />
      case 5:
        return <img src={D5} alt="5" />
      case 6:
        return <img src={D6} alt="6" />
      default:
        return <img src={D1} alt="1" />
    }
  }

  function Reroll() {
    if (re <= 0) {
      return
    }
    if (sel1) {
      setdice1(rollDice)
    }
    if (sel2) {
      setdice2(rollDice)
    }
    if (sel3) {
      setdice3(rollDice)
    }
    if (sel4) {
      setdice4(rollDice)
    }
    if (sel5) {
      setdice5(rollDice)
    }
    setre(re - 1)
  }
  const [allscore, setallscore] = useState([])
  const [byscore, setbyscore] = useState([])

  function updatescore(type, score) {
    allscore[turn] += score
    byscore[turn][type] = score

    if (byscore[turn][0] === 0) {
      let sum = 0
      for (let index = 1; index <= 6; index++) {
        if (byscore[turn][index] !== -1) {
          sum += byscore[turn][index]
        }
      }
      if (sum >= 63) {
        allscore[turn] += 35
        byscore[turn][0] = 35
      }
    }
    setallscore(allscore)
    setbyscore(byscore)
    setup()
  }

  function onetosix(n) {
    let ans = 0
    if (dice1 === n) {
      ans += n
    }
    if (dice2 === n) {
      ans += n
    }
    if (dice3 === n) {
      ans += n
    }
    if (dice4 === n) {
      ans += n
    }
    if (dice5 === n) {
      ans += n
    }
    return ans
  }

  function threeok() {
    let occ = [7]
    occ[dice1] += 1
    occ[dice2] += 1
    occ[dice3] += 1
    occ[dice4] += 1
    occ[dice5] += 1
    if (Math.max(occ) >= 3) {
      return dice1 + dice2 + dice3 + dice4 + dice5
    } else {
      return 0
    }
  }

  function fourok() {
    let occ = [7]
    occ[dice1] += 1
    occ[dice2] += 1
    occ[dice3] += 1
    occ[dice4] += 1
    occ[dice5] += 1
    if (Math.max(occ) >= 4) {
      return dice1 + dice2 + dice3 + dice4 + dice5
    } else {
      return 0
    }
  }

  function yz() {
    let occ = [7]
    occ[dice1] += 1
    occ[dice2] += 1
    occ[dice3] += 1
    occ[dice4] += 1
    occ[dice5] += 1
    if (Math.max(occ) === 5) {
      return 50
    } else {
      return 0
    }
  }
  function full() {
    let occ = [7]
    occ[dice1] += 1
    occ[dice2] += 1
    occ[dice3] += 1
    occ[dice4] += 1
    occ[dice5] += 1
    if (Math.max(occ) === 3 && occ.indexOf(2) !== -1) {
      return 25
    } else {
      return 0
    }
  }

  function small() {
    let occ = [7]
    occ[dice1] += 1
    occ[dice2] += 1
    occ[dice3] += 1
    occ[dice4] += 1
    occ[dice5] += 1
    const a = occ[1] > 0 && occ[2] > 0 && occ[3] > 0 && occ[4] > 0
    const b = occ[5] > 0 && occ[2] > 0 && occ[3] > 0 && occ[4] > 0
    const c = occ[5] > 0 && occ[6] > 0 && occ[3] > 0 && occ[4] > 0
    if (a | b | c) {
      return 30
    } else {
      return 0
    }
  }

  function large() {
    let occ = [7]
    occ[dice1] += 1
    occ[dice2] += 1
    occ[dice3] += 1
    occ[dice4] += 1
    occ[dice5] += 1
    const xor = (occ[1] === 0 && occ[6] !== 0) || (occ[1] !== 0 && occ[6] === 0)
    if (xor && Math.max(occ) === 1) {
      return 40
    }
    return 0
  }

  function chance() {
    return dice1 + dice2 + dice3 + dice4 + dice5
  }

  return (
    <>
      {turn === 0 && (
        <Form>
          <Form.Label>Player number</Form.Label>
          <Form.Control
            type="number"
            min="2"
            onChange={(e) => {
              setplayer(e.target.value)
            }}
          />
          <Button onClick={setup}>Setup</Button>
        </Form>
      )}
      {turn > 0 && (
        <div>
          <h1>Player {turn} </h1>
          <Form className="yactzee">
            <div className="dice">
              {Diceset(dice1)}
              <Form.Check
                type="checkbox"
                onChange={(e) => setsel1(e.target.value)}
              />
            </div>
            <div className="dice">
              {Diceset(dice2)}
              <Form.Check
                type="checkbox"
                onChange={(e) => setsel2(e.target.value)}
              />
            </div>
            <div className="dice">
              {Diceset(dice3)}
              <Form.Check
                type="checkbox"
                onChange={(e) => setsel3(e.target.value)}
              />
            </div>
            <div className="dice">
              {Diceset(dice4)}
              <Form.Check
                type="checkbox"
                onChange={(e) => setsel4(e.target.value)}
              />
            </div>
            <div className="dice">
              {Diceset(dice5)}
              <Form.Check
                type="checkbox"
                onChange={(e) => setsel5(e.target.value)}
              />
            </div>
            <Button onClick={Reroll}>Reroll({re}/2)</Button>
          </Form>
          {byscore[turn][1] && (
            <div className="flex">
              <div className="fifty">
                <div className="flex">
                  <h2>one </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][1] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(1, onetosix(1))
                      }}
                    >
                      {onetosix(1)}
                    </Button>
                  )}{" "}
                  {byscore[turn][1] !== -1 && <h2>{byscore[turn][1]}</h2>}
                </div>
                <div className="flex">
                  <h2>two </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][2] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(2, onetosix(2))
                      }}
                    >
                      {onetosix(2)}
                    </Button>
                  )}{" "}
                  {byscore[turn][2] !== -1 && <h2>{byscore[turn][2]}</h2>}
                </div>
                <div className="flex">
                  <h2>three </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][3] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(3, onetosix(3))
                      }}
                    >
                      {onetosix(3)}
                    </Button>
                  )}{" "}
                  {byscore[turn][3] !== -1 && <h2>{byscore[turn][3]}</h2>}
                </div>
                <div className="flex">
                  <h2>four </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][4] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(4, onetosix(4))
                      }}
                    >
                      {onetosix(4)}
                    </Button>
                  )}{" "}
                  {byscore[turn][4] !== -1 && <h2>{byscore[turn][4]}</h2>}
                </div>
                <div className="flex">
                  <h2>five </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][5] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(5, onetosix(5))
                      }}
                    >
                      {onetosix(5)}
                    </Button>
                  )}{" "}
                  {byscore[turn][5] !== -1 && <h2>{byscore[turn][5]}</h2>}
                </div>
                <div className="flex">
                  <h2>six </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][6] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(6, onetosix(6))
                      }}
                    >
                      {onetosix(6)}
                    </Button>
                  )}{" "}
                  {byscore[turn][6] !== -1 && <h2>{byscore[turn][6]}</h2>}
                </div>
                <div>
                  <h2>bonus {byscore[turn][0]}</h2>
                </div>
              </div>
              <div className="fifty">
                <div className="flex">
                  <h2>three of a kind</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][7] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(7, threeok())
                      }}
                    >
                      {threeok()}
                    </Button>
                  )}{" "}
                  {byscore[turn][7] !== -1 && <h2>{byscore[turn][7]}</h2>}
                </div>
                <div className="flex">
                  <h2>four of a kind</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][8] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(8, fourok())
                      }}
                    >
                      {fourok()}
                    </Button>
                  )}{" "}
                  {byscore[turn][8] !== -1 && <h2>{byscore[turn][8]}</h2>}
                </div>
                <div className="flex">
                  <h2>yactzee</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][9] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(9, yz())
                      }}
                    >
                      {yz()}
                    </Button>
                  )}{" "}
                  {byscore[turn][9] !== -1 && <h2>{byscore[turn][9]}</h2>}
                </div>
                <div className="flex">
                  <h2>small straight</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][10] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(10, small())
                      }}
                    >
                      {small()}
                    </Button>
                  )}{" "}
                  {byscore[turn][10] !== -1 && <h2>{byscore[turn][10]}</h2>}
                </div>
                <div className="flex">
                  <h2>large straight</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][11] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(11, large())
                      }}
                    >
                      {large()}
                    </Button>
                  )}{" "}
                  {byscore[turn][11] !== -1 && <h2>{byscore[turn][11]}</h2>}
                </div>
                <div className="flex">
                  <h2>fullhouse</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][12] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(12, full())
                      }}
                    >
                      {full()}
                    </Button>
                  )}{" "}
                  {byscore[turn][12] !== -1 && <h2>{byscore[turn][12]}</h2>}
                </div>
                <div className="flex">
                  <h2>chance</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {byscore[turn][13] === -1 && (
                    <Button
                      onClick={() => {
                        updatescore(13, chance())
                      }}
                    >
                      {chance()}
                    </Button>
                  )}{" "}
                  {byscore[turn][13] !== -1 && <h2>{byscore[turn][13]}</h2>}
                </div>
              </div>
            </div>
          )}
          {allscore.map((value, index) => {
            return (
              index !== 0 && (
                <h2>
                  player {index} : {value}
                </h2>
              )
            )
          })}
        </div>
      )}
    </>
  )
}

export default Ya
