!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.ReactCountdownClock=e(require("react")):t.ReactCountdownClock=e(t.React)}(this,function(t){return function(t){function e(i){if(s[i])return s[i].exports;var n=s[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var s={};return e.m=t,e.c=s,e.p="/build/",e(0)}([function(t,e,s){var i;i=s(1),t.exports=i.createClass({_seconds:0,_radius:null,_fraction:null,_content:null,_canvas:null,_timeoutIds:[],displayName:"ReactCountdownClock",propTypes:{seconds:i.PropTypes.number,size:i.PropTypes.number,weight:i.PropTypes.number,color:i.PropTypes.string,fontSize:i.PropTypes.string,font:i.PropTypes.string,alpha:i.PropTypes.number,timeFormat:i.PropTypes.string,onComplete:i.PropTypes.func,showMilliseconds:i.PropTypes.bool},getDefaultProps:function(){return{seconds:60,size:300,color:"#000",alpha:1,timeFormat:"hms",fontSize:"auto",font:"Arial",showMilliseconds:!0}},componentWillReceiveProps:function(t){return this._seconds=t.seconds,this._setupTimer()},componentDidMount:function(){return this._seconds=this.props.seconds,this._setupTimer()},componentWillUnmount:function(){return this._cancelTimer()},_setupTimer:function(){return this._setScale(),this._setupCanvas(),this._drawTimer(),this._startTimer()},_updateCanvas:function(){return this._clearTimer(),this._drawTimer()},_setScale:function(){return this._radius=this.props.size/2,this._fraction=2/this._seconds,this._tickPeriod=this._calculateTick(),this._innerRadius=this.props.weight?this._radius-this.props.weight:this._radius/1.8},_calculateTick:function(){var t,e;return e=1.8,t=this._seconds*e,t>1e3?1e3:t},_setupCanvas:function(){return this._canvas=this.refs.canvas,this._context=this._canvas.getContext("2d"),this._context.textAlign="center",this._context.textBaseline="middle"},_startTimer:function(){return this._timeoutIds.push(setTimeout(function(t){return function(){return t._tick()}}(this),200))},_cancelTimer:function(){var t,e,s,i,n;for(s=this._timeoutIds,i=[],t=0,e=s.length;t<e;t++)n=s[t],i.push(clearTimeout(n));return i},_tick:function(){var t;return t=Date.now(),this._timeoutIds.push(setTimeout(function(e){return function(){var s;return s=(Date.now()-t)/1e3,e._seconds-=s,e._seconds<=0?(e._seconds=0,e._handleComplete(),e._clearTimer()):(e._updateCanvas(),e._tick())}}(this),this._tickPeriod))},_handleComplete:function(){if(this.props.onComplete)return this.props.onComplete()},_clearTimer:function(){return this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._drawBackground()},_drawBackground:function(){return this._context.beginPath(),this._context.globalAlpha=this.props.alpha/3,this._context.arc(this._radius,this._radius,this._radius,0,2*Math.PI,!1),this._context.arc(this._radius,this._radius,this._innerRadius,2*Math.PI,0,!0),this._context.fill()},_formattedTime:function(){var t,e,s,i,n,o;return t=null!=(i=this._seconds<=9.9&&this.props.showMilliseconds)?i:{1:0},"hms"===this.props.timeFormat?(e=parseInt(this._seconds/3600)%24,s=parseInt(this._seconds/60)%60,n=(this._seconds%60).toFixed(t),e<10&&(e="0"+e),s<10&&(s="0"+s),n<10&&s>=1&&(n="0"+n),o=[],e>0&&o.push(e),s>0&&o.push(s),o.push(n),o.join(":")):this._seconds.toFixed(t)},_fontSize:function(t){var e,s;return"auto"===this.props.fontSize?(e=function(){switch(t.length){case 8:return 4;case 5:return 3;default:return 2}}(),s=this._radius/e,s+"px"):this.props.fontSize},_drawTimer:function(){var t,e;return e=this._fraction*this._seconds+1.5,t=this._formattedTime(),this._context.globalAlpha=this.props.alpha,this._context.fillStyle=this.props.color,this._context.font="bold "+this._fontSize(t)+" "+this.props.font,this._context.fillText(t,this._radius,this._radius),this._context.beginPath(),this._context.arc(this._radius,this._radius,this._radius,1.5*Math.PI,Math.PI*e,!1),this._context.arc(this._radius,this._radius,this._innerRadius,Math.PI*e,1.5*Math.PI,!0),this._context.fill()},render:function(){return i.createElement("canvas",{ref:"canvas",className:"react-countdown-clock",width:this.props.size,height:this.props.size})}})},function(e,s){e.exports=t}])});
//# sourceMappingURL=react-countdown-clock.js.map