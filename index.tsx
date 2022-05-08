import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {}
interface AppState {
  name: string;
  data: any[];
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'BINGO',
      data: [
        'Searched my phone/wallet while keeping it in pocket',
        'Wore pajama bottoms in a video meeting 🙈',
        'Accidentally sending a text to the person you are talking about 😎',
        'Seeing an expensive product at a store and pretending you are still considering it',
        'Ringing the door bell constantly only to realise it is not your place',
        'Clicking 100s of pictures just to get that one perfect shot',
        "Sometimes I will start a sentence and I don't even know where it's going",
        "Claiming you have an office work just to avoid social functions even though you don't",
        'Getting down at the wrong stop because you were too busy with your phone, only to discretely get back in',
        'We know dreams come to true in office but thinking what about sleep ?😄',
        'Putting headphones on but forget to play music due to some other stuffs and continuously wearing it for sometime',
        'Accidentally make video call to a person on WhatsApp whom you never text or call 😜',
        "Claiming feeling unwell, getting caught on social media enjoying the day at it's great",
        'Taking out your phone to check the time, then getting distracted by it and totally forgetting what time it is',
        'Losing track of conversation mid way while continuing to nod along, racking my brains to figure out what or who it was about',
        'Taking a break from the internet on your computer to check out the internet on your phone 😂',
        "Sending the message to the wrong person on WhatsApp and then while deleting clicked on 'delete for me' instead of 'delete for everyone'",
        '1Eating your favourite thing very slowly just to tease your sibling because he has already finished it',
        'Watching a daily soap with mother because your phone is on charging',
        "Making a friend pay the hotel bill by convincing him  ' abhi tu sara bill bhar de , bad me sab teko phone pay kar denge'",
        "Checking your symptoms on the internet, and convincing yourself you're on death's door 😱",
        'Stepping out not realizing you are wearing two completely different shoes; flaunting that it is the new trend ',
        'Walking into a room and forgetting what you went in there for.',
        'While in a intense good conversation and your phone battery is @ 2%….run to save your life looking for a charger  !😳',
        'Seeing a belonging about to fall on the ground, knowing you could probably save it, but sitting, doing nothing, and watching it fall 👿',
      ],
    };
  }

  render() {
    const getRandom = (diff: number) => {
      return Math.floor(Math.random() * diff);
    };
    let length = this.state.data.length;
    let arr1D = [];
    let arr2D = [];
    let arr = [];

    for (let i = 0; i < length; i++) {
      let random = getRandom(length);
      if (arr1D.indexOf(random) != -1) {
        random = getRandom(length);
        --i;
      } else {
        arr1D.push(random);
        arr.push(random);
      }
    }

    while (arr1D.length) arr2D.push(arr1D.splice(0, Math.sqrt(length)));
    const addClass = (e: any, id: any) => {
      document
        .getElementById(id)
        .setAttribute('class', 'p-2 bg-info border cell bg-danger');
      console.log('Key', id, e);
    };
    return (
      <div>
        <div className="text-center">
          <Hello name={this.state.name} />
        </div>
        {/* <div>
          <section className="bingo-cards d-flex">
            {arr2D.map((data: any[], row: any) => {
              return (
                <div className="d-grid bg-secondary text-dark">
                  {data.map((elem: any, col: any) => {
                    return (
                      <div className="">
                        <div
                          key={`${row}${col}`}
                          id={`${row}${col}`}
                          onClick={(e) => addClass(e, `${row}${col}`)}
                          className="d-flex bg-info border cell"
                        >
                          <div className="cellData">
                            <p>{this.state.data[elem]}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </section>
        </div> */}
        <div className="bingo-container m-auto">
          <section className="bingo-cards d-grid">
            {arr.map((elem: any, key: any) => {
              return (
                <div
                  key={key}
                  id={`${key}`}
                  onClick={() => {
                    document
                      .getElementById(`${key}`)
                      .setAttribute('class', 'bingo-card outter selection');
                  }}
                  className="bingo-card outter"
                >
                  <div className="bingo-card__wr d-grid">
                    <div className="bingo-card__content">
                      <p className="p-1 text-content">
                        {this.state.data[elem]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
