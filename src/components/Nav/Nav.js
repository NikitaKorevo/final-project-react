import { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichPageNow: 1,
      maxPage: 15,
      firstPage: 1,
      arrNumber: [
        {
          number: 1,
          className: undefined
        },
        {
          number: 2,
          className: undefined
        },
        {
          number: 3,
          className: undefined
        },
        {
          number: 4,
          className: undefined
        },
        {
          number: 5,
          className: undefined
        }
      ]
    };
  }

  transferMaxPage = () => {
    this.setState({whichPageNow: this.state.maxPage})
    /* this.props.showLastPage(this.state.maxPage); */
    this.props.getPage(this.state.maxPage)
  }

  transferFirstPage = () => {
    this.setState({whichPageNow: this.state.firstPage})
   /*  this.props.showLastPage(this.state.firstPage); */
   this.props.getPage(this.state.firstPage)
  }

  transferPreviousPage = () => {
    if (this.state.whichPageNow > this.state.firstPage) {
      let previousPage = this.state.whichPageNow - 1;
      this.setState({whichPageNow: previousPage})
      /* this.props.showPreviousPage(previousPage); */
      this.props.getPage(previousPage);
    }
  }

  transferNextPage = () => {
    if (this.state.whichPageNow < this.state.maxPage) {
      let nextPage = this.state.whichPageNow + 1;
      this.setState({whichPageNow: nextPage})
      /* this.props.showPreviousPage(nextPage); */
      this.props.getPage(nextPage);
    }
  }

  transferNumberedNavigation = (e) => {
    if (Number(e.target.innerText) >= this.state.firstPage && Number(e.target.innerText) <= this.state.maxPage) {
      this.setState({whichPageNow: Number(e.target.innerText)});
      this.props.getPage(Number(e.target.innerText));
    }
  }

  render() {
    let copyArrNumber = this.state.arrNumber;

    if (this.state.whichPageNow  < this.state.firstPage + 3) {
      for (let i = 0; i < 5 ; i++) {
        copyArrNumber[i].number = this.state.firstPage + i;

        if (this.state.whichPageNow - 1 === i) {
          copyArrNumber[i].className = "nav-numbered-navigation__button";
        } else {
          copyArrNumber[i].className = undefined;
        }
      }
      /* console.log('1 if '); */
      if (this.state.arrNumber !== copyArrNumber) {
        this.setState({arrNumber: copyArrNumber});
      }
    }

    if (this.state.whichPageNow > this.state.firstPage + 2 && this.state.whichPageNow < this.state.maxPage - 2) {
      
      for (let i = 0; i < 5; i++) {
        copyArrNumber[i].number = this.state.whichPageNow - 2 + i;

        if (i === 2) {
          copyArrNumber[i].className = 'nav-numbered-navigation__button';
        } else {
          copyArrNumber[i].className = undefined;
        }
      }
      /* console.log('2 if '); */
      if (this.state.arrNumber !== copyArrNumber) {
        this.setState({arrNumber: copyArrNumber});
      }
    }

    if (this.state.whichPageNow  > this.state.maxPage - 3) {
      for (let i = 0; i < 5 ; i++) {
        copyArrNumber[i].number = this.state.maxPage - 4 + i;
        
         if (copyArrNumber[i].number === Number(this.state.whichPageNow)) {
          copyArrNumber[i].className = 'nav-numbered-navigation__button';
        } else {
          copyArrNumber[i].className = undefined;
        }
      }
      /* console.log('3 if '); */
      if (this.state.arrNumber !== copyArrNumber) {
        this.setState({arrNumber: copyArrNumber});
      }
    }

    return (
      <nav className="nav">
        <div className="nav__arrow-navigation-left">
          <button onClick={this.transferFirstPage} id="buttonFirstPage"></button>
          <button onClick={this.transferPreviousPage} id="buttonPreviousPage"></button>
        </div>
        <div onClick={this.transferNumberedNavigation} className="nav__numbered-navigation">
          <button className={this.state.arrNumber[0].className}>{this.state.arrNumber[0].number}</button>
          <button className={this.state.arrNumber[1].className}>{this.state.arrNumber[1].number}</button>
          <button className={this.state.arrNumber[2].className}>{this.state.arrNumber[2].number}</button>
          <button className={this.state.arrNumber[3].className}>{this.state.arrNumber[3].number}</button>
          <button className={this.state.arrNumber[4].className}>{this.state.arrNumber[4].number}</button>
        </div>
        <div className="nav__arrow-navigation-right">
          <button onClick={this.transferNextPage} id="buttonNextPage"></button>
          <button onClick={this.transferMaxPage} id="buttonLastPage"></button>
        </div>
      </nav>
    );
  }
}

export default Nav;