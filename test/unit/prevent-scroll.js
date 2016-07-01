import preventScroll from '../../src/prevent-scroll';

describe('preventScroll', function() {
  beforeEach(() => {
    this.body = document.body;
    this.htmlEl = document.querySelector('html');

    this.originalPosition = this.htmlEl.style.position;
    this.originalOverflow = this.htmlEl.style.overflowY;
    this.originalWidth = this.htmlEl.style.width;
    this.originalTop = this.htmlEl.style.top;
  });

  afterEach(() => {
    this.htmlEl.style.position = this.originalPosition;
    this.htmlEl.style.overflowY = this.originalOverflow;
    this.htmlEl.style.width = this.originalWidth;
    this.htmlEl.style.top = this.originalTop;
  });

  describe('on', () => {
    describe('when the htmlEl has scrollTop', () => {
      beforeEach(() => {
        this.htmlEl.scrollTop = 200;
      });

      afterEach(() => {
        this.htmlEl.scrollTop = 0;
        preventScroll.off();
      });

      it('should apply the right style to htmlEl', () => {
        preventScroll.on();
        expect(this.htmlEl.style.position).to.equal('fixed');
        expect(this.htmlEl.style.overflowY).to.equal('scroll');
        expect(this.htmlEl.style.width).to.equal('100%');
        expect(this.htmlEl.style.top).to.equal('-200px');
      });
    });

    describe('when the body has scrollTop', () => {
      beforeEach(() => {
        this.body.scrollTop = 500;
      });

      afterEach(() => {
        this.body.scrollTop = 0;
        preventScroll.off();
      });

      it('should apply the right style to htmlEl', () => {
        preventScroll.on();
        expect(this.htmlEl.style.position).to.equal('fixed');
        expect(this.htmlEl.style.overflowY).to.equal('scroll');
        expect(this.htmlEl.style.width).to.equal('100%');
        expect(this.htmlEl.style.top).to.equal('-500px');
      });
    });

    describe('when the window height is larger than the body height', () => {
      beforeEach(() => {
        this.originalWindowHeight = window.innerHeight;
        this.originalBodyHeight = this.body.clienHeight;

        window.innerHeight = 5000;
        this.body.clientHeight = 300;
      });

      afterEach(() => {
        window.innerHeight = this.originalWindowHeight;
        this.body.clientHeight = this.originalBodyHeight;
        preventScroll.off();
      });

      it('should not set the HTML to position fixed', () => {
        preventScroll.on();
        expect(this.htmlEl.style.position).to.not.equal('fixed');
      });
    });
  });

  describe('off', () => {
    it('should restore the original values', () => {
      this.htmlEl.style.position = 'pasta';
      this.htmlEl.style.overflowY = 'yes';
      this.htmlEl.style.width = '100000px';

      // Let's just make confirm that JSDom allows us to use these silly values
      expect(this.htmlEl.style.position).to.equal('pasta');

      // Turning it on should remove our original value
      preventScroll.on();
      expect(this.htmlEl.style.position).to.not.equal('pasta');

      // ...and back to what we had before
      preventScroll.off();
      expect(this.htmlEl.style.position).to.equal('pasta');
      expect(this.htmlEl.style.overflowY).to.equal('yes');
      expect(this.htmlEl.style.width).to.equal('100000px');
    });
  });
});
