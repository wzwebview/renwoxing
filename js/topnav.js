function SelectPullDown(box){
	this.selectBox = document.getElementById(box);
	this.selectIpt = document.getElementById(box).getElementsByTagName("input")[0];
	this.selectDivBtn = document.getElementById(box).getElementsByTagName("p")[0];
	this.selectDivList = document.getElementById(box).getElementsByTagName("div")[0];
	this.selectSpan = document.getElementById(box).getElementsByTagName("span");
}
SelectPullDown.prototype ={
	selectBox : '',
	selectIpt : '',
	selectDivBtn : '',
	selectDivList : '',
	selectSpan : '',
	iptEven : function(){
		var self = this;
		this.selectBox.onmouseover = function(){
			self.selectListShow();
		}	
		this.selectBox.onmouseout = function(){
			self.selectListHide();
		}
		return this;	
	},
	selectListShow: function(){
		this.selectBox.setAttribute("class","type border");
		this.selectDivList.style.display = "block";
	},
	selectListHide: function(){
		this.selectDivList.style.display = "none";
		this.selectBox.setAttribute("class","type");
	},
	selectPick : function() {
		var span = this.selectSpan,
		self = this;
		function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
		for(var i=0;i<span.length;i++){
			span[i].onclick = function(){
				var this_ = i;
				self.selectDivBtn.innerHTML ="<span>" + trimStr(this.innerHTML) + "</span><i></i>";
				self.selectIpt.value= this_;
				self.selectListHide();
				//chang事件触发
				if (self.selectIpt.fireEvent) self.selectIpt.fireEvent('onchange');
				else{ 
					var evt;
					evt = document.createEvent("HTMLEvents");  
					evt.initEvent("change", true, true);  
					self.selectIpt.dispatchEvent(evt);
				};
			}
		}	
		return this;
	},
	init : function(){
		this.iptEven().selectPick();	
	}
};

var year = new SelectPullDown('typeselect');
year.init();