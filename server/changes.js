 onImageHover() {
    const {
      like, showHeart, showBag, addToBag,
    } = this.state;
    if (like) {

      this.setState({
        showHeart: true,
      });
    } if (addToBag) {
      this.setState({
        showBag: true,
      });
    } else {
      this.setState({
        showHeart: !showHeart,
        showBag: !showBag,
      });
    }
  }



  onHeartClick() {
    const { like } = this.state;
    const { onLikeBagClick, product } = this.props;
    const { name } = product;
    this.setState({
      like: true,
    });
    onLikeBagClick(name, 'like');
  }

  if (like === true && showHeart === true) {
    this.setState({
      showBag: !showBag,
    });
  }
  if (addToBag) {
    this.setState({
      showBag: true,
    });
  }
  else if (like === false) {
    this.setState({
      showHeart: !showHeart,
      showBag: !showBag,
    }, () => {
      setTimeout(() => {
        this.setState({
          showBag: false,
          addToBag: false,
        });
      }, 5000);
    });
  }


