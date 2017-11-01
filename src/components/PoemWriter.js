import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  poemHandler(event) {
    this.setState({
      poem: event.target.value
    })
  }

  poemCheck = () => {
    let poem = this.state.poem
    let firstLineFiveWords
    let secondLineThreeWords
    let thirdLineFiveWords
    let threeLines = (poem.split(/\r\n|\r|\n/).length === 3)
    if (threeLines) {
      firstLineFiveWords = (poem.split(/\r\n|\r|\n/)[0].split(' ').filter(n => (n !== "")).length === 5)
      secondLineThreeWords = (poem.split(/\r\n|\r|\n/)[1].split(' ').filter(n => (n !== "")).length === 3)
      thirdLineFiveWords = (poem.split(/\r\n|\r|\n/)[2].split(' ').filter(n => (n !== "")).length === 5)
    }

    if (!threeLines || !firstLineFiveWords || !secondLineThreeWords || !thirdLineFiveWords) {
      return (
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      )
    }
  }

  render() {
    const poemCheck = this.poemCheck()
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.poemHandler.bind(this)}
        />
        {poemCheck}
      </div>
    );
  }
}

export default PoemWriter;
