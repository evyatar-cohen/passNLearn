(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"game_atlas_", frames: [[0,2792,1948,987],[0,3781,169,190],[171,3781,169,190],[0,0,1938,1396],[0,1398,1939,1392]]}
];


// symbols:



(lib.Group_3_0 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Path_1 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.גיבוימחולל19pngcopy = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Path_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhMOAeXMAACg8xMCYbAAEMgACA8xg");
	this.shape.setTransform(548.5,401.6,1,1.144);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_79, new cjs.Rectangle(60.6,178.9,975.8,445.4), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7.3).p("ECVFAAEMkqJgAI");
	this.shape.setTransform(954.1,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(-3.6,0,1915.5,8.2), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("EhtUgSEMgnlAkUMEp4AAJMghcgk2");
	this.shape.setTransform(956.8,119.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0.1,-0.4,1913.4,238.8), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("EgsIgLuQAoBgBdCPQC6EeEFDsQFuFMHSC6QJHDpLCgLQLBgKJtjtQHxi9GklEQEtjoDokVQB0iKA4hc");
	this.shape.setTransform(283.9,75.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(-0.1,-0.9,567.9,153.2), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABAQhQAAg5gTQg5gTAAgaQAAgaA5gTQA5gSBQAAQBRAAA5ATQA5ASAAAaQAAAag5ATQg4AThOAAIgEAAg");
	this.shape.setTransform(19.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,39.1,12.8), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_3_0();
	this.instance.parent = this;
	this.instance.setTransform(0,91,1,1.118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,91,1948,1103.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiVEAMgIAA5IMEqJAAJIgBZIg");
	mask.setTransform(954.2,80.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0EFF6").s().p("EgwkANmMAABggZMBhJAACMgACAllg");
	this.shape.setTransform(1876.1,121.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D34D44").s().p("EgrZAPdMAABghEMBWyAADMgABAjMg");
	this.shape_1.setTransform(1575.2,113.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0EFF6").s().p("EgwkANnMAABggbMBhJAADMgACAlmg");
	this.shape_2.setTransform(1347.4,120.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D34D44").s().p("EgrZAPdMAABghEMBWyAADMgABAjMg");
	this.shape_3.setTransform(1046.5,113.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0EFF6").s().p("EgwkANnMAABggbMBhJAAEMgACAllg");
	this.shape_4.setTransform(809.3,120.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D34D44").s().p("EgrZAPdMAABghEMBWyAADMgABAjMg");
	this.shape_5.setTransform(508.4,112.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0EFF6").s().p("EgpOAOpIAB+bMBScAADIgBfig");
	this.shape_6.setTransform(263.9,101.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.1,0,1908.2,161.7), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhAiBBmMAAEiDQMCBBAAEMgAFCDRg");
	mask.setTransform(413.1,420.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#765949").s().p("ABcC6QhnAIhoAWIhTAUQAyhhBygSQA4gJAwAKIFtAAQiniYnZARQiVAFigAUIiEAUIABhQQGhjRFwBsQB1AiBgA+QAxAeAZAXQgFhLichsQgxgig7ghIgwgaQD1AfCqEHQBVCFAlB+Qjah1lRAag");
	this.shape.setTransform(343.7,453.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59473D").ss(4.7).p("AK2qSQg6AOheAnQi8BNi1B6QpCGGkiKy");
	this.shape_1.setTransform(317.9,206.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59473D").ss(4.7).p("APBu/QhsAZikA9QlJB7kcC2QmOEAj9FSQk8GnhFIT");
	this.shape_2.setTransform(291.2,198.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#59473D").ss(4.7).p("ApICNIA/gvQBOg4BOgtQD7iRCcASQDvAcBqAdQCgAsAcBO");
	this.shape_3.setTransform(595.4,446.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#292929").s().p("AhRBSQghgiAAgwQAAgvAhgiQAighAvAAQAwAAAiAiQAhAhAAAvQAAAwgiAiQgiAhgvAAQgvAAgighg");
	this.shape_4.setTransform(592.7,460.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4766AE").s().p("AAQDMQihgDgwgfQgygfAAhkQAAhkBIhHQBHhIBkAAQBlABBIBHQBHBHAABkQAABpgmAeQgnAfiDAAIgUgBg");
	this.shape_5.setTransform(592.7,459.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApmC2QgFgnAUg0QARgrAZggQAlgtCrhjQBWgxBOgpQDjhGDqAwQC1AlBvBTQAoAeAGAyQAGArgWAwQgVAvgmAdQgoAegpgDQhYgGkaAeQkjAgjRApQgwAKglAAQhqAAgLhPg");
	this.shape_6.setTransform(592.7,459.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#765949").s().p("An8B/QhDgEBtg7ICBhGQBMgnBMgXQDJg+FrADICcBiQiNgdi9AFQl6AJj1CkQgsAIgfAAIgPgBg");
	this.shape_7.setTransform(590.3,428.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#59382D").s().p("AjEGKQgigHgDgjIgEhBQgBgPAJgNQBVh/BIh/QB+jcAZh2IAIgdQAOgrAqAOQArANgMArIgBAFIggB6QgEARAIAQQA1BhAYBjQApCpg/BsQgTAhglgOQgkgOAIgmQAfiUggiOQggiIgTAmQgLAXgEBHQgBAJgEAIIi+F+QgNAagZAAIgMgCg");
	this.shape_8.setTransform(722.7,547.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#59473D").ss(4.2).p("AhnsbIAJgEQBhgjBtAGQDGAKBvChQBFBjALDIQAMDCguDPQgxDchfCRQhqCkiMAaQgMADgJAHQhlBTikBPQjiBtgrhYQgrhWAiiAQALgoATguQATgpADgJQACgHAAgDIABsrQABgKBriIQBpiGAKgGg");
	this.shape_9.setTransform(743.8,536.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4BB94").s().p("AneMXQgrhWAiiAQALgoATguIAWgyIACgKIABsrQABgKBriIQBpiGAKgGIBqiBIAJgEQBhgjBtAGQDGAKBvChQBFBjALDIQAMDCguDPQgxDchfCRQhqCkiMAaQgMADgJAHQhlBTikBPQh9A8hFAAQg4AAgTgng");
	this.shape_10.setTransform(743.8,536.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#59382D").s().p("ACsGpIjOmgQgCgGAAgEQgFhIgKgXQgUgrggCLQgoCxA5C4QAHAUgSAMQgSAMgQgNQh9hrAnjQQAXh2BAhyQAGgLgDgKIgiiBQgOg4gdgeQgOgPAJgTQAJgTAUAEQBZAQAZB1QAZB6B7EEQBJCbBCB6QADAGAAAHIADAuQABAXgXAGIgJACQgPAAgJgRg");
	this.shape_11.setTransform(217.6,544.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#59473D").ss(4.2).p("AB5s/QhTghhqABQjVACh2CqQhFBkgLDLQgLDFAvDQQAyDeBhCQQBtCjCPAUIBBA/QBRBJBHA1QDjCpAuhdQAvhegOiwQgFg4gKg4IgJguIh7xQg");
	this.shape_12.setTransform(195.6,549.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4BB94").s().p("ACtLzQhHg1hRhJIhBg/QiPgUhtijQhhiQgyjeQgvjQALjFQALjLBFhkQB2iqDVgCQBqgBBTAhIDTCCIB7RQIAJAuQAKA4AFA4QAOCwgvBeQgQAhgoAAQhHAAiShtg");
	this.shape_13.setTransform(195.6,549.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#59473D").ss(7.1).p("EAEdgjEQi+gLkhAOQpCAdnwB+Qq2CwmsFXQoYGuhYKeQiiTKBrJtQAiDBA4BuQAcA3AWAQIAxBIQA+BXBBBNQDPD4CZA4QArAQAPiSQANh/gMjSQgLjHgaioQgbiygegqQHBlfG9m0QN6tmgSmlIFCCTQGCC1FACjQQBILgSChIAhgpQAgg5AAhPQAAj+lCmBICJCCQCkChCKCdQG5H1AIENIANACQAQABAQgEQAxgLAZg4QBPizjForIITQHIgxDFQg4DtgiDNQhwKRCPBbQAQgnAag4QA2hxA3hbQCxkkCCAkQBJAUA4kJQAxjkAbmAQAYlegDk9QgElAgfhXQhjkWgIgTQhfj7hvjZQlKqLm7lLQqwoDpCAXQi0AHiUA8QgvATglAWg");
	this.shape_14.setTransform(464.9,278.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#936B53").s().p("EAldAZQQAijOA4jtIAxjEIoTwHQDFIqhPCzQgZA4gxAMQgQADgQgBIgNgCQgIkMm5n1QiKidikiiIiJiCQFCGCAAD9QAABQggA5IghApQASihwBoLQlAikmCi0IlCiUQASGmt6NmQm9GznBFgQAeAqAbCxQAaCpALDHQAMDSgNB/QgPCRgrgQQiZg4jPj3QhBhNg+hYIgxhHQgWgQgcg3Qg4hugijCQhrpsCizKQBYqeIYmuQGslYK2iwQHwh9JCgdQEhgOC+AKIAcgSQAlgWAvgSQCUg8C0gHQJCgXKwIDQG7FLFKKLQBvDZBfD6IBrEqQAfBWAEFBQADE8gYFeQgbGAgxDkQg4EJhJgUQiCgkixEkQg3Bbg2BxQgaA5gQAmQiPhaBwqRg");
	this.shape_15.setTransform(464.9,277.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D3E36").s().p("Ah4CJQkBgTjUg1QjNg0gdguQgvhOA5gYQARgIAagBQANgBAKABQG/C7Itg7QEWgeC9hDQCBAIgIAlQgEATgeARQiFBzkRApQiOAVimAAQhnAAhygIg");
	this.shape_16.setTransform(469.1,645.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#765949").s().p("AiJBZQgXgQgsgUQhYgnhogRQhygTg1ghQgtgcASgVICZAeQCoAdBMgKQBMgLA7AjQAdARAOASIBUg1IBUgPQBegQA1ABQBKAABogYQBjgWATgYQgVAjg5ArQh9BcjaAoQgaAtg0AaQglASgoAAQhIAAhVg9g");
	this.shape_17.setTransform(472.1,580.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#765949").s().p("ALeDIQjdi9k/hnQk+hnlWBNQhrAYhgAoIhLAiQitAKAghNQAKgYAegeQAPgPAMgKQKBlVJWDqQC7BJCgB6QBQA9ArAuIAAFUQguhKhvhfg");
	this.shape_18.setTransform(613.7,382.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#765949").s().p("AuOECQAEgjAMgqIALgjQDbl2F0hfQCDghCdAAQAfAADAAKQCbAICaBAQA8AZDzB/QCOBLhoAiQggALg1AEIgvADQngidknAmQhmANhxApQh1Awg7ARQiCAoh/CdQhJBcgLALQgsAvglAFIgMAAQg6AAALhjg");
	this.shape_19.setTransform(326.8,377.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#59473D").ss(4.8).p("EgsgAA3IA6EOQBPFKBtEtQFePBIJEyQHNEOA4AfQDxCICnBFQDEBQDCAgQDKAiEBgHQETgHE/hWQFQhbE5ifQFUiuEFjmQEhj/ClktQC3lQCPmAQC4nugBkiQgBkOmGzEQh6l/iRmuIh6liMgoNgEQI3nHbg");
	this.shape_20.setTransform(464.8,459.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4BB94").s().p("EgGgAsZQjDghjDhQQiohFjwiHQg4ggnNkOQoJkxlevCQhukshPlLIg5kOMANBgmPIXnnbMAoOAEPIB5FjQCSGuB6F+QGFTFABENQACEji4HtQiQGBi3FPQilEukgD+QkFDnlVCtQk4CglQBaQk/BWkTAIIhWABQjOAAingcg");
	this.shape_21.setTransform(464.8,459.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(5.8).p("As2jhIArBrQA7B+BTBnQEJFKGNgiQHGgmDSjMQC9i2g5kFQgsjKsjBsQj8AhkpA9g");
	this.shape_22.setTransform(467.1,758,1,1,0,0,0,0.6,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4BB94").s().p("AqCBvQhThng7h+IgrhrID3g1QEpg9D7ghQMjhsAsDKQA5EFi9C2QjRDMnGAmQgkADgkAAQleAAjwkrg");
	this.shape_23.setTransform(467.1,758);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2A2A2B").ss(8).p("Au241IdKABIA4gJQBJgKBQgGQEBgRDwAoQFQA4D9CjQE8DLCoFmQExKLAoNYQAUGtgpEqIvQDDMg+agA4IxGh4QALl/Apm0QBStoCVkQQB9jjBKhoQCFi6CriCQG5lNNkhZg");
	this.shape_24.setTransform(472.2,885.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4CACE0").s().p("A+fYbIxHh4QALl/Apm0QBStoCVkQQB9jjBLhoQCEi6CsiCQG4lNNlhZIdJABIA5gJQBIgKBRgGQEBgRDwAoQFQA4D8CjQE8DLCoFmQExKLApNYQAUGtgpEqIvRDDg");
	this.shape_25.setTransform(472.2,885.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(144.5,36.5,652.5,804.1), null);


(lib.keeper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2A2A").ss(1.2).p("ABzDEIhWACIhtkCQAFgSgBgZQgBgwgbgfQAOgDAPgEQAdgGACgCQAGgDAXAlQAYAogNAYQgOAYBBCJQAhBFAjBBg");
	this.shape.setTransform(131,-95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#724168").s().p("AhVg8QAEgSAAgZQgCgwgagfIAdgHQAcgGACgCQAHgDAXAlQAYAogNAYQgOAYBBCJQAgBFAkBBIhWACg");
	this.shape_1.setTransform(131.6,-95.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2A2A").ss(1.4).p("AB6glIgxAKQg2AJgUgGQgVgGgxAiQgYARgVAT");
	this.shape_2.setTransform(81.3,-81.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2B2A2A").ss(1.4).p("ABlgaQhTAVgXgGQgOgDgoAUQgTALgRAM");
	this.shape_3.setTransform(84.7,-90.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2B2A2A").ss(1.4).p("ABfgHIguAIQg1AJghgDQg2gEACgD");
	this.shape_4.setTransform(86.4,-97.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2B2A2A").ss(1.4).p("AEFixQgOgbh7geQiEgghOAVQhIATgpATQgUAKgFAFIgTAOQgTATAAAhQgBAmgTAsQgSArgLgEQgLgFgHAlQgHAlARAPQAVASAagBQAjAAA8ggQAvgYBQATQAaAHAXAKQATAJgDABQAGAGglAeQgEAEg2AoQhJA3AoAaQAQAJAagBQAbgCAUgNQARgLCIhIQBug7AggdQAOgOAcgQQAQgJgEgIQgLgmgNgnQgYhNgWgtg");
	this.shape_5.setTransform(102.6,-81);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2539E").s().p("AhrD3QgogaBJg3IA6gsQAlgegGgGQADgBgTgJQgXgKgagHQhQgTgvAYQg8AggjAAQgaABgVgSQgRgPAHglQAHglALAFQALAEASgrQATgsABgmQAAghATgTIATgOQAFgFAUgKQApgTBIgTQBOgVCEAgQB7AeAOAbQAWAtAYBNIAYBNQAEAIgQAJQgcAQgOAOQggAdhuA7QiIBIgRALQgUANgbACIgHAAQgVAAgOgIg");
	this.shape_6.setTransform(102.6,-81);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2B2A2A").ss(1.4).p("ACKDsIhqAFIiCk6QAGgWAAgdQgBg8ggglQASgEASgEQAkgJACgBQAHgFAcAuQAdAwgRAeQgSAdBOCmQAnBUArBNg");
	this.shape_7.setTransform(526.2,-55.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#724168").s().p("AhohJQAGgWAAgdQgBg8ggglIAkgIQAkgJABgBQAIgFAcAuQAdAwgSAeQgRAdBOCmQAnBUArBNIhrAFg");
	this.shape_8.setTransform(526.8,-55.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2B2A2A").ss(1.4).p("AhxkdQgBgBgZgSQgagJgKApIgCAeQgFAigJAQQgJARhrBMQg1Amg0AjQBuEpAQAWQALANAzABQBIgBAuAAQA6ABClgbICbgcQAJgBALgFQAVgKALgVQALgWgOgNQgLgJgVgBQgXgBg8ANQhDAOgOABQgJgFgFgGQgLgMARgFQANgDBxgWQBrgVAFgDQAbgMAHgEQAagRgBgSQAAgcgJgMQgMgSghAHQgyAKizA3IgigBQgagHArgcIC+g6QANgCANgFQAbgJAFgOQAGgTgGgNQgHgQgbAAQgYgBhpAhQg0AQgvARIgTAIQgSAFAEgWQADgQAkgMQAmgJABgBQBxgmAJgLQAPgRgHgRQgMgahFAFQhEAFh2AoQg6AVgtATIgYAJQgWADAMgdQAHgRAVghQAOgXACgWQADgZgNgcQgJgWgJgIg");
	this.shape_9.setTransform(566.7,-62.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2539E").s().p("AkfElQgQgWhukpIBphJQBrhMAJgRQAJgQAFgiIACgeQAKgpAaAJIAaATQAJAIAJAWQANAcgDAZQgCAWgOAXQgVAhgHARQgMAdAWgDIAYgJQAtgTA6gVQB2goBEgFQBFgFAMAaQAHARgPARQgJALhxAmQgBABgmAJQgkAMgDAQQgEAWASgFIATgIIBjghQBpghAYABQAbAAAHAQQAGANgGATQgFAOgbAJQgNAFgNACIi+A6QgrAcAaAHIAiABQCzg3AygKQAhgHAMASQAJAMAAAcQABASgaARQgHAEgbAMQgFADhrAVQhxAWgNADQgRAFALAMQAFAGAJAFQAOgBBDgOQA8gNAXABQAVABALAJQAOANgLAWQgLAVgVAKQgLAFgJABIibAcQilAbg6gBQguAAhIABQgzgBgLgNg");
	this.shape_10.setTransform(566.8,-62.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2B2D2E").ss(5.1).p("AA/CjQADgtgQg+Qgfh9hZhd");
	this.shape_11.setTransform(530.7,-47.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F58335").s().p("AhCiiQBYBcAfB+QAQA+gCAtg");
	this.shape_12.setTransform(530.4,-47.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F4F4F5").ss(2).p("AAbByQg9gSgvgiQhfhCBKhOIA6AuIB5BhQgugUgkggQgcgWgLgXQgTgmAdgkICtBw");
	this.shape_13.setTransform(38.1,78.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F4F4F5").ss(2).p("AhagyIgDAmQgBAtAHAjQAYBwBmgiIgThGQAcAhAsgLIggjKAAUBMIgniVIABAeQAEAlAIAcQAKAjAQATg");
	this.shape_14.setTransform(36.9,75.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3E3E3D").s().p("AlRDLQgKgyAUhJIAVhAQDgjeChg/QAygUAmgBIAcADICIDDQARAhgLAmQgkB4kwCEQiJA8hSAAQhjAAgQhYg");
	this.shape_15.setTransform(34.1,79.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D3E36").s().p("AgsBgQhfh3AWhSQAKgkAhgIQAjgJAyAbQBZAvARAxQAJAYgJAOQAEAIgIAkQgKApgRAcQgWAkgdAAQgjAAgsg4g");
	this.shape_16.setTransform(334.9,-47);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C8A87C").s().p("ACWM7Ig+gtQBzgpBXhtQAcgiAVgkIAQgeQCVhcAZh6QAHglgDgwQgDguACgHQAKgsgkg4QgwhLh8hSQhbg8g3hZQgRgbgMgcIgIgVQgQjOilhgQg6gihEgPQg1gLgfAEQgcADhWA1QhKAugSgMQgTgNg2ALQhIAOgKAAQgdAAhkBaQgvArgVAWQAFgGgchsQAwghBPg0QCfhpCbhcQCchcEAAoQBQANBRAYIBBAWQASgHAMgDQAYgGgdATQgfAUgQDPQgPC9AKAsQAHAjAmAzQAaAiAiAkQAbAdA8ASIA3ANQBGAhESBdIgFBIQgRBvg9DCQg+DBjkCbQhzBPhwAuIgEABQgOAAg2glgAsemTIAAAAIAAAAg");
	this.shape_17.setTransform(420.5,-103.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59473D").ss(1.4).p("AssmMQAWgYApgpQBuhvAfAAQAMAABJgPQA3gLAUAOQASAMBLgvQBYg2AdgEQAfgEA3AMQBFAPA8AjQCoBiAQDSIAJAWQAMAcARAcQA5BbBcA+QB/BTAyBNQAkA5gKAtQgCAHADAwQADAwgIAmQgaB9iXBeIgTAfQgaAngeAkQhjByh1AqIA+AsQBAArAJgHQB4gwB6hRQD0ihA+jGQA/jGARhxIAFhKQkYhfhIghIg3gNQg9gTgcgeQhghkgMg7QgKguAPjBQAQjTAggUQAegUgZAGQgMADgTAHIhCgWQhSgZhTgNQkFgpifBfQifBeioB3QhUA8g1ApIAZA4QALAggDAUQgCARgLAIQgfAXAsgwg");
	this.shape_18.setTransform(421.6,-105.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C8A87C").s().p("ACNNQIg+gsQB1gqBihyQAfgkAZgnIATgfQCYheAah9QAIgmgDgwQgDgwABgHQAKgtgkg5QgxhNh/hTQhdg+g4hbQgSgcgMgcIgIgWQgQjSiphiQg7gjhGgPQg2gMggAEQgdAEhXA2QhMAvgSgMQgUgOg2ALQhJAPgMAAQgfAAhvBvIg+BBQgCARgMAIQgfAXAtgwQACgUgKggIgZg4QA0gpBUg8QCoh3CfheQCfhfEGApQBSANBTAZIBCAWQASgHANgDQAZgGgfAUQggAUgQDTQgODBAJAuQAMA7BgBkQAcAeA9ATIA4ANQBIAhEXBfIgEBKQgRBxg/DGQg/DGjzChQh7BRh3AwIgEABQgOAAg3glg");
	this.shape_19.setTransform(421.6,-105.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#59473D").s().p("AhmATQAigWA4gYQArgTAzgOQA1gQAtgGIheAgQg4AUglAQIhaAqQgwAbgjAcQAhgkAtgcg");
	this.shape_20.setTransform(473.3,-180.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#59473D").s().p("AlIDiIARgVQATgTAUgSQAegbA0goQBEg1BohGQBihDBPgyIBbg4IBbg1IlfDtQhiBChMA3Qg5ApgbAXQgZAUgOAOIgTAUQgLAMgDAJQACgHAKgQg");
	this.shape_21.setTransform(492.9,-154.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#59473D").s().p("AjEBHQAagVAfgTQAxgeBJggQA+gcBBgXQBHgaA8gPIh+A2Ih9A2Ig+AcIg9AeQglAVgVAOQgjAYgOAWQAKgYAigdg");
	this.shape_22.setTransform(478.8,-168);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#59473D").s().p("AhtDIQAagWAZgfQAngvAvhKQAggzAqhNIBIiEQgYBDgjBHQgiBGgnA9QguBLgrAuQgcAfgdAUQgnAageACQAhgIAfgbg");
	this.shape_23.setTransform(500.7,-138.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#59473D").s().p("AiNBHQA7guBEgtQCNheB/hAQhWA7isByIiABWIh5BiQAlgwBLg8g");
	this.shape_24.setTransform(479.5,-156.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#59473D").s().p("AifCuQATgQAngkQA2g0A4g7QAkglBIhNIBrhzQgpA6g4BCQgwA6g5A7Ig3A4QgmAkgVARQgcAYgiAZQgrAdgaAJQAegRAigcg");
	this.shape_25.setTransform(494,-145.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#59473D").s().p("AgdBIQAUgcASglIAkhEIAjhGQgHAhgPArQgOAkgTAiQgXAqgUAYQgfAkgeAPQAYgWAagmg");
	this.shape_26.setTransform(509.4,-126.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#59473D").ss(2).p("AEEGcQAWgMAXgXQAugtAGgzQAIhFAZhUQAdhgAhgrQhfBegUAFQgNADAkh1QAjhzARgaQAMgTgkAQQgTAIgUAMIAuhIIhHAgICCiLIhzAXQh5ApgIgBQgIgCAog7Ig0AEIAxhGIh9ACQgTgIgNgKQgZgVAdgNQAegOjEAXQhjAMhoAOIjgBiIBcGcIARAuQASAvABAHQABAFAkAjQAkAkACALQACANBeAVIBeARIFGBsg");
	this.shape_27.setTransform(483.9,-148);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5E531").s().p("AhXFVIhegSQhegUgCgNQgCgMgkgjQgkgjgBgFQgBgHgSgwIgRguIhcmbIDghiIDLgaQDEgXgeANQgdAOAZAUQANALATAHIB9gBIgxBGIA0gEQgoA7AIABQAIACB5gpIBzgXIiCCLIBHggIguBIQAUgMATgIQAkgQgMATQgRAZgjBzQgkB1ANgDQAUgFBfhdQghAqgdBhQgZBTgIBGQgGAyguAtQgXAXgWANIgwAjg");
	this.shape_28.setTransform(481.2,-148.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#765949").s().p("ABAAgQhKhZhYgdQgNgLgGgJQgMgRAkAQQBCAdAVAOQA1AmBEBXIAGA3QgUgnglgtg");
	this.shape_29.setTransform(417.7,-64);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#59473D").ss(1.5).p("Ah9iDQAlAJAqARQBTAiAaApQAmA/ANAeQAUAvgPAW");
	this.shape_30.setTransform(413.2,-55.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#292929").s().p("AgEAiQgPgBgJgMQgJgLACgNQACgPAMgJQAMgIAOABQAPACAJAMQAJALgCAOQgCAOgMAJQgKAHgLAAIgFgBg");
	this.shape_31.setTransform(411.2,-56);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4766AE").s().p("AACBKQgQgEgbgkQgegngCgRQgBgSAZgTQAagSAeAEQAgAEATAZQATAYgEAeQgFAegZASQgWARgOAAIgFgBg");
	this.shape_32.setTransform(410.8,-55.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABBB/QgPgWg9g/QhAhAgygrQgtgnAYgXQATgRAiABQASAAA6AXIA1AXQA9ArAhBAQAZAzAAAqQAAAfgmAIQgJACgIAAQgYAAgLgRg");
	this.shape_33.setTransform(409.8,-55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#59473D").ss(1.5).p("ABiCWQACgkgGgsQgLhXgjgiQgzg1gcgUQgpgfgZAH");
	this.shape_34.setTransform(368.9,-119);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#59382D").s().p("AANgLQAPgMAGgIQAMgQgsATQgsATghAmQgQATgIAPQgQhEBMgkQAYgMAdgGIAZgFIAdgiQASgVgGgTIgIgOIAXAUQASAagbAeQgbAfgjBQQgSApgLAjIhCAqg");
	this.shape_35.setTransform(316.8,-132.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#59473D").ss(1.3).p("ADDiKQgIgagUgaQgpg0hCADQgmACg1AiQgzAhgsAyQhqB4AsBMIgIBVQgBBUAggGQAhgGArghIEjkIg");
	this.shape_36.setTransform(319.8,-137.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4BB94").s().p("AjEChIAIhVQgshMBqh4QAsgyAzghQA1giAmgCQBCgDApA0QAUAaAIAaIAHBKIkjEIQgrAhghAGIgEABQgcAAABhPg");
	this.shape_37.setTransform(319.8,-137.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#59382D").s().p("AhZBBQARgDAXgKQAwgUAfgjQAfgkgUAHQgJADgRALIi7AhIAyggQCigYA8gbQAlgRAWAYQALAMADAPQgDgHgJgFQgRgJgaAKIgrARIgLAWQgPAZgSATQgjAngoAAQgWAAgXgMg");
	this.shape_38.setTransform(414.3,-7.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#59473D").ss(1.3).p("ADMiUIAPAKQARAOAMAQQApA0gVA7QgMAjgxAoQgwAmg9AbQiVBBhBg9IhXgQQhUgWAPgcQAOgcAugfIFXjFg");
	this.shape_39.setTransform(416.4,-7.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F4BB94").s().p("Ah0CTIhXgQQhUgWAPgcQAOgdAugfIFXjFIBJAbIAPALQARANAMAQQApA1gVA6QgMAjgxAoQgwAng9AbQhOAig1AAQgzAAgggeg");
	this.shape_40.setTransform(416.4,-7.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#292929").s().p("AgEAjQgPgCgJgMQgJgLACgOQACgOAMgJQAMgJAOACQAPACAJAMQAJALgCAOQgCAOgMAJQgKAHgMAAIgEAAg");
	this.shape_41.setTransform(367.8,-116.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4766AE").s().p("AACBIQgQgGgfgnQgdgiAAgRQAAgOAbgTQAZgTAfAEQAfAFAUAYQATAZgFAdQgEAegZATQgTANgPAAQgFAAgEgBg");
	this.shape_42.setTransform(367.3,-116.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAfCFQgdg5gvhMQguhJgSgVQgTgUASggQASgiAfAJQArAMAqAlQA5AwAZBEIAJA3QAHA8gEARQgIAggXAMQgHAEgHAAQgWAAgUgpg");
	this.shape_43.setTransform(366.5,-115.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#765949").s().p("ABcCRQgSgHgbgYQgYgWgagOIgWgKQgxgPgGgiIADgfQgfg8gBgvIAFgbQABAKAKAVQAOAdAOASQAQAVAUAoIACAeQAIAAAKAEQASAIANAUQATAgBFA3QgBAFgGAAQgEAAgHgCg");
	this.shape_44.setTransform(360.7,-67);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#765949").s().p("ACzCzQgFglgXgwQgthghXg7QhWg6hagTQgtgJgbACIBWg+QAUACAeAIQA9AQA1AgQCtBmAkDZIgHAfQgFAHgGAAQgMAAgVgdg");
	this.shape_45.setTransform(384.2,-135.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#765949").s().p("ABLD3QgHgMAOg4QAQg7gPgnIgRg3QgLgigQgbQguhPiDhXQgPgUgFgPQgLggAtAVQBOAjATALQAsAZAfAkQBHBQAVAwQAvBrg1B5IgXAbQgOANgKAAQgHAAgFgJg");
	this.shape_46.setTransform(437.6,-70.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#765949").s().p("ABLCKIgQgXQgFhZhEhdQgWgdgagaIgVgUIA2AUQBFBXAXA7QAIAWAMBGQAEAbgGAAQgCAAgEgFg");
	this.shape_47.setTransform(375.2,-121.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#59473D").ss(1.5).p("AIGLlIhgArQh1AzhxAkQlnByirhSQiIhBiTg5QhfgthShsQheh7g2kIQg1j9AnhXQArhgCEi5QCPjLBMg2QBEgxF+iBIFvh4IIuI+ICoHEg");
	this.shape_48.setTransform(392.4,-91);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4BB94").s().p("AlROHQiJhBiTg5QhfguhRhrQheh8g3kHQg1j+AohXQArhfCDi5QCQjLBLg2QBFgyF9iBIFvh3IIuI+ICoHDInLKKIhfAsQh2AzhxAjQjRBCiRAAQhoAAhHghg");
	this.shape_49.setTransform(392.4,-90.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(1.8).p("ADBDEIgjAJQgrAJgpgBQiEgEhDhnQhNhzAMhYQAKhPBMghQA7gaB8DVQA/BqAzBwg");
	this.shape_50.setTransform(311.7,-32.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4BB94").s().p("ABKDVQiEgEhDhnQhNhzALhYQAKhPBNghQA7gaB8DVQA/BqAzBwIgjAJQgnAIglAAIgIAAg");
	this.shape_51.setTransform(311.7,-32.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#2B2D2E").ss(1.4).p("APjhCIJskFQgDgEBeg5QBjg9AvgQQBegfBfgcIAOgEQADgBBGCqQAkBUAiBVQgCgCgOgBQgXgBgdAEQgjAFgZAKQgiAOg+AOQg4ANgiADQgzAGhSAaQg8ATACgBIjzBJIiFAuQiQA1g7AZQhTAki0BEQitBBABgEIi/ATQjMAfhFA4QhbBKoaDpQonDvgygaQgzgakEmFQkBmDAHghQAGgdCjgXQCSgUA9AFQAuADDAifQDDijAMg5QhTg+h7hFQj3iIjNgaQjNgbh4gBQg7gBgNAGQAGAAglApQgrAuguAeQiQBdhZh5QhZh3BChlQAVggAhgaIAegTQAegHAxgEQBkgHBjAMQD7AaCnAVQE6ApBRAnQBDAgClAbQDVAiAkAJQBVAWC/B8QBgA/BOA6");
	this.shape_52.setTransform(319,-12.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F58335").s().p("AvuOLQg0gakDmFQkCmDAHghQAHgdCjgXQCRgUA+AFQAuADDAifQDCijAMg5QhSg+h7hFQj3iIjNgaQjOgbh3gBQg8gBgMAGQAGAAgmApQgqAugvAeQiQBdhZh5QhYh3BChlQAUggAigaIAdgTQAegHAygEQBjgHBkAMQD7AaCnAVQE6ApBQAnQBDAgCmAbQDUAiAkAJQBVAWDAB8QBfA/BPA6IQyFTIJskFQgDgEBeg5QBjg9AwgQQBdgfBggcIANgEQADgBBHCqIBFCpQgBgCgPgBQgWgBgeAEQgjAFgZAKQghAOg+AOQg4ANgiADQgzAGhSAaIg7ASIjzBJIiEAuQiQA1g7AZQhTAki0BEQiuBBABgEIi+ATQjMAfhFA4QhbBKobDpQnxDYhZAAQgJAAgFgDg");
	this.shape_53.setTransform(318.1,-12.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#2B2A2A").ss(1.4).p("AJuCJIjtERQjxESgWAJQgNAFhHgoQhFgphNg5QjLiYAOhEQANg/BzhpIBwhbQATgUAFgOQAKgehHAZQhwAoifBAQgUARghgNQhDgchAiYQgFgMhwjtQgTgngCgRQgCgTAPgJQArgXMCkxIIjMQg");
	this.shape_54.setTransform(158.3,61.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#936B53").s().p("AAnKRQhFgphNg5QjLiYAOhEQANg/BzhpIBwhbQATgUAFgOQAKgehHAZQhwAoifBAQgUARghgNQhDgchAiYQgFgMhwjtQgTgngCgRQgCgTAPgJQArgXMCkxIIjMQIhAAsIjtERQjxESgWAJIgEABQgRAAg/gkg");
	this.shape_55.setTransform(158.2,61.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(1.4).p("ABXBvIhkj0IhJAmIBfDmg");
	this.shape_56.setTransform(76.3,55.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E1E1E1").s().p("AhWhgIBJgmIBkD1IhOAXg");
	this.shape_57.setTransform(76.3,55.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(1.4).p("AB7BDIjCi4Ig0A+IC5Cug");
	this.shape_58.setTransform(128.9,133.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E1E1E1").s().p("Ah6g3IAzg/IDCC4Ig9A1g");
	this.shape_59.setTransform(128.9,133.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#F4F4F5").ss(2).p("AAbByQg9gSgvghQhfhDBLhOIA6AuIB4BhQgugUgkggQgbgWgLgXQgTgmAcgkICtBw");
	this.shape_60.setTransform(95.3,163.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F4F4F5").ss(2).p("AhZgyIgDAmQgCAtAHAjQAYBwBmgiIgThGIgniVIABAeQAEAlAIAcQAKAjAQATQAcAhAsgLIggjK");
	this.shape_61.setTransform(94.1,160.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#2B2D2E").ss(1.4).p("ABSiuIh9AzQiAA1gJAQQgLARADA7QADA6AJANIA6BTIEyhkg");
	this.shape_62.setTransform(73.4,57.3,1,1,0,0,0,0,0.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AD5D39").s().p("AivBdQgJgOgDg5QgDg7ALgRQAJgQCAg2IB9gzIBqD6IkyBkg");
	this.shape_63.setTransform(73.3,57.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3E3E3D").s().p("AlRDLQgKgyAUhJIAVhAQDgjeChg/QAygUAmgBIAcADICIDDQARAhgLAmQgkB4kwCEQiJA8hSAAQhjAAgQhYg");
	this.shape_64.setTransform(89.6,164.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#2B2D2E").ss(1.4).p("ADEgSIjRi9IhXBqQhZBsgIARQgIARBDBVQAiArAjAng");
	this.shape_65.setTransform(127.4,136.7,1,1,0,0,0,-0.3,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AD5D39").s().p("AiIB+QhEhVAIgRQAIgRBZhsIBYhqIDQC9IkJDiQgjgnghgrg");
	this.shape_66.setTransform(127.5,136.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#59473D").ss(1.4).p("AFJAuIpkCSIhJiWIJjjpIBnCUg");
	this.shape_67.setTransform(81.1,53.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F4BB94").s().p("AlkApIJjjoIBmCUIgdBZIpjCSg");
	this.shape_68.setTransform(81.2,53.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#59473D").ss(1.4).p("AEghCInFGLIh4iCIFQmYIC2h1g");
	this.shape_69.setTransform(134,125.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F4BB94").s().p("AkeDGIFQmYIC2h1IA3EEInFGLg");
	this.shape_70.setTransform(134.1,125.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.keeper, new cjs.Rectangle(0,-194.7,611.8,388.4), null);


(lib.Goal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(8.2).p("AlPB7QgLgYAKgZIF+t6QALgaAagPQAcgPAbAGIGsBUQAbAGAMAWQAMAXgKAaIl/N6QgKAagdAPQgdAOgagFImrhUQgbgFgLgXgApcLzQgMgXAKgaICwmaQAJgaAdgPQAcgPAcAFIGrBUQAcAGAKAWQALAXgLAaIiuGaQgKAagcAPQgbAPgbgFImshUQgbgFgMgXg");
	this.shape.setTransform(1124.3,-73.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6ABE5D").s().p("AiJNjImshUQgbgFgMgXQgMgXAKgaICwmaQAJgaAdgPQAcgPAcAFIGrBUQAcAGAKAWQALAXgLAaIiuGaQgKAagcAPQgUAMgUAAIgOgCgACCDrImrhUQgbgFgLgXQgLgYAKgZIF+t6QALgaAagPQAcgPAbAGIGsBUQAbAGAMAWQAMAXgKAaIl/N6QgKAagdAPQgVALgUAAIgOgCg");
	this.shape_1.setTransform(1124.3,-73.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#373535").ss(8.2).p("Ak/CgQgOgVAIgbIEXufQAHgbAagSQAYgTAbADIGzAjQAcADAOAVQAPAUgHAcIkXOfQgIAbgaASQgbASgbgCImygjQgcgCgNgWgAoDMyQgOgVAHgbICAmrQAGgbAcgSQAagSAcACIGxAjQAcACANAWQAOAVgIAbIh/GrQgIAbgZASQgZATgbgDImzgjQgcgDgOgVg");
	this.shape_2.setTransform(1045.5,-87.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6ABE5D").s().p("AgmNtImzgjQgcgDgOgVQgOgVAHgbICAmrQAGgbAcgSQAagSAcACIGxAjQAcACANAWQAOAVgIAbIh/GrQgIAbgZASQgWARgXAAIgHgBgACcDbImygjQgcgCgNgWQgOgVAIgbIEXufQAHgbAagSQAYgTAbADIGzAjQAcADAOAVQAPAUgHAcIkXOfQgIAbgaASQgXAQgYAAIgHAAg");
	this.shape_3.setTransform(1045.5,-87.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").ss(8.2).p("AkxC5QgPgUAFgbIDLuzQAGgcAXgUQAXgUAcAAIG0AAQAbAAARAUQAQAVgFAbIjLOzQgFAbgZAUQgZAUgcAAImzAAQgcAAgPgUgAm+NaQgRgVAFgbIBdm1QAFgbAZgUQAZgUAcAAIGzAAQAcAAAPAUQAPAUgFAbIhdG1QgFAagYAWQgXAUgcAAIm0AAQgcAAgPgUg");
	this.shape_4.setTransform(963.8,-94.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6ABE5D").s().p("AmTNtQgcAAgPgTQgRgVAFgbIBdm1QAFgaAZgVQAZgUAcAAIGzAAQAcAAAPAUQAPAVgFAaIhdG1QgFAagYAWQgXATgcAAgAkGDNQgcABgPgVQgPgUAFgbIDLuzQAGgbAXgVQAXgTAcAAIG0AAQAbAAARATQAQAWgFAaIjLOzQgFAbgZAUQgZAVgcgBg");
	this.shape_5.setTransform(963.8,-94.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").ss(8.2).p("ArONsQgRgUAEgbIEZ5fQAEgcAXgVQAXgVAcgBIH0gUQAbgBARATQASAUgFAbIjKSeIK1gcQAbgBARATQARAUgGAcIhBF9QgEAcgXAVQgYAVgbABIztAyQgcABgRgTg");
	this.shape_6.setTransform(833.8,-92.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6ABE5D").s().p("ArONsQgRgUAEgbIEZ5fQAEgcAXgVQAXgVAcgBIH0gUQAbgBARATQASAUgFAbIjKSeIK1gcQAbgBARATQARAUgGAcIhBF9QgEAcgXAVQgYAVgbABIztAyIgDAAQgaAAgQgSg");
	this.shape_7.setTransform(833.8,-92.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").ss(8.2).p("AukOvQgNgLgCgUQgCgMAGgQILZ6SQARgjAegcQAegcAtgFIIog5QAsgFAaAWQAZAVAJAjIF/YfQAGAhgSAVQgSAWgeADInBAvQhQAIgLg+IgqiiIoXA3IhOCvQgNAbgZAWQgXAUgrAEInmAyQgUACgOgLgAgzCQIEZgdIhanKg");
	this.shape_8.setTransform(649.3,-77.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6ABE5D").s().p("AukOvQgNgLgCgUQgCgMAGgQILZ6SQARgjAegcQAegcAtgFIIog5QAsgFAaAWQAZAVAJAjIF/YfQAGAhgSAVQgSAWgeADInBAvQhQAIgLg+IgqiiIoXA3IhOCvQgNAbgZAWQgXAUgrAEInmAyIgGABQgQAAgMgKgAgzCQIEZgdIhanKg");
	this.shape_9.setTransform(649.3,-77.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").ss(8.2).p("AlFOiQi0gaiAhnQh+hngoiwQgOg+AAgwQgMjMAGj2QAKldC2jbQC3jcGChVQDIgtC3AeQC2AeCABpQCABqAmCtQANA4ABA2QALDNgGD1QgKFhi2DUQi1DTmGBXQjJAti1gagAC3CuQAFjhgIjNQAAgXgIgiQgQhHgtgbQgugbhEAPQhQASgwA+QgwA+gCBqQgGDZAJDVQAAAYAIAkQAgCLCPggQCugnAEjRg");
	this.shape_10.setTransform(481.7,-62.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6ABE5D").s().p("AlFOiQi0gaiAhnQh+hngoiwQgOg+AAgwQgMjMAGj2QAKldC2jbQC3jcGChVQDIgtC3AeQC2AeCABpQCABqAmCtQANA4ABA2QALDNgGD1QgKFhi2DUQi1DTmGBXQh+Ach3AAQhGAAhDgJgAgDmnQhQASgwA+QgwA+gCBqQgGDZAJDVQAAAYAIAkQAgCLCPggQCugnAEjRQAFjhgIjNQAAgXgIgiQgQhHgtgbQgegSgmAAQgWAAgYAGg");
	this.shape_11.setTransform(481.7,-62.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").ss(8.2).p("AnfOtQjYhLhMkCQgUhFgJhSQgZjEgMkHQgPlPDLjtQDMjsFthsQDihDCzANQC1AOB0BPQB0BPAnCCQALAnAEAmQABAXgPAVQgOAWgWAGIoTCdQguAOgbgVQgDgCgUgXQgUgXgpgIQgrgJgzAQQi1A1ALDBQAHDPAbDjQACAgAJAgQAqCOCegvQBggcAyg8QAzg6gHhgIgBgCIhxAhQgaAIgWgOQgVgPgBgdIgXkaQgDgcASgaQASgbAbgHIKVjEQAagHAVAOQAUAPADAcIAbFMQAYFRjTD5QjTD6l3BvQlFBgjZhMg");
	this.shape_12.setTransform(309.3,-31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6ABE5D").s().p("AnfOtQjYhLhMkCQgUhFgJhSQgZjEgMkHQgPlPDLjtQDMjsFthsQDihDCzANQC1AOB0BPQB0BPAnCCQALAnAEAmQABAXgPAVQgOAWgWAGIoTCdQguAOgbgVQgDgCgUgXQgUgXgpgIQgrgJgzAQQi1A1ALDBQAHDPAbDjQACAgAJAgQAqCOCegvQBggcAyg8QAzg6gHhgIgBgCIhxAhQgaAIgWgOQgVgPgBgdIgXkaQgDgcASgaQASgbAbgHIKVjEQAagHAVAOQAUAPADAcIAbFMQAYFRjTD5QjTD6l3BvQi2A2iUAAQh1AAhfgig");
	this.shape_13.setTransform(309.3,-31.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AD1EVQgFgOgSgiIgbgsIgOgWIhShmIgRgTIg2g5IgSgTIgSgTIglgmIgnglIgmgnIgngmIgmgoQgzgzgZghQAsANA/AcQALAEAnAWQAaAOAXAOQAVAMAaAUIAtAiQAyArAiAjIAmArQAJAJAJAOIAiAuIAqBOIAMAbQAFAOAEAOQAGASAHAoQAEAogCAUIgEAdQgFATgEAJQgEgWgNgfg");
	this.shape_14.setTransform(411.8,-251.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3E3E3").s().p("AkNlJQFzD0B4DnQA8B1gPBDg");
	this.shape_15.setTransform(411.2,-251.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AD2EVQgGgOgRgiIgcgsIgegrQgLgQgEgEIghgpIgRgTIhHhNIgTgTIg3g5IgmglIgngnIgngmIgTgUIgTgUQgwgwgcgkQAsANA/AcQALAEAnAWQAbAOAWAOQAVAMAaAUIAtAiQAtAmAnAoIAnArQAKAMAIALIA/BhIAYA2IAJAcQAGARAIApQADAlgBAXIgEAdIgKAcQgDgSgNgjg");
	this.shape_16.setTransform(647.8,-274.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3E3E3").s().p("AkNlJQF0D0B3DnQA8B1gOBDg");
	this.shape_17.setTransform(647.3,-274.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AhlEuIAOgXIANgVQARgeAHgQIAKgXIALgXIAUgvIARgwIAIgYIARgwIAHgZIAPgxQAThEAKghQAJgjAVhFQAShCAQgnQAKAoAJBHQADAkgBBLIgFA4IgEAcQgCATgCAIIgMA3QgIAfgIAXIgKAbIgKAbIgZAzQgKAVgTAdIgQAYIgSAXIgTAWIgTAVIgtAlIgyAdQggAPgXADQAighAhgzg");
	this.shape_18.setTransform(692.9,179.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3E3E3").s().p("ACemBQgSGWiWDfQhLBwhIAeg");
	this.shape_19.setTransform(691.8,179.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AhlEuQAGgIAHgPIAOgVQAQgeAHgQIALgXIALgXIAUgvIARgwIAZhHIAHgaIAPgxIAdhlQALgrASg8QARg/ASgrQALAtAIBBQADAlgBBMQgCAYgEAfIgDAcIgEAbIgNA3QgHAggJAWIgJAbQgGASgFAIIgYA0IgdAyIgiAvQgEAGgPAQIgUAVQgJAJgMAKQgOANgJAFIgyAdQghAPgWADQAigiAhgyg");
	this.shape_20.setTransform(483.1,177.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3E3E3").s().p("ACemBQgSGWiWDfQhLBwhIAeg");
	this.shape_21.setTransform(482.1,177.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").ss(11.9).p("EAvugadQhOAahHAfQgdijhBiaQiCkwj/jnQj2jglKh/QlJh+lpgKQl2gKljB2QmXCGkoESQlMkXnIhSQnVhVnFCWQjbBJi6B5Qi1B1iKCaQlAjxmlhDQmyhEmhCKQktBkjpC+QjgC4iCDzQiCDzgPEIQgQESBuEBQBvEGDeDHQDWDAEeBqQjlCrihDeQigDdhOD5QimIODZH8QCKFFERD3QEIDwFgCHQFgCHGCAKQGQALF7h+QELhYDmiVQF1DoHLA1QHZA3HEiWQDKhDCzhnQH6ABHhigQJbjHG2mXQGnmKC9n/QE6CLFiASQFtATFbhzQFFhsD6jNQDyjGCMkGQCMkFARkdQARkmh3kWQh2kVjqjUQjhjNkthzQkuh0lKgJQlWgJlEBrg");
	this.shape_22.setTransform(669.3,-49.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3E3E3").s().p("EgyQAufQmCgKlgiHQlgiHkIjwQkRj3iKlFQjZn8CmoOQBOj5CgjdQChjeDlirQkehqjWjAQjejHhvkGQhukBAQkSQAPkICCjzQCCjzDgi4QDpi+EthkQGhiKGyBEQGlBDFADxQCKiaC1h1QC6h5DbhJQHFiWHVBVQHIBSFMEXQEokSGXiGQFjh2F2AKQFpAKFJB+QFKB/D2DgQD/DnCCEwQBBCaAdCjQBHgfBOgaQFEhrFWAJQFKAJEuB0QEtBzDhDNQDqDUB2EVQB3EWgREmQgREdiMEFQiMEGjyDGQj6DNlFBsQlbBzltgTQligSk6iLQi9H/mnGKQm2GXpbDHQnhCgn6gBQizBnjKBDQnECWnZg3QnLg1l1joQjmCVkLBYQleB0lvAAIg+gBg");
	this.shape_23.setTransform(669.3,-49.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").ss(9).p("EBbVgsJQhuBnisCOQl8E6mEDuQofFOnfCHQpXCpnQiaQhelbHZuhQBwjbD/nKQDElhAmhjQkKD+qEJBQryKkjcCkQnyqnhfxVQgelaAOlcQAHiuANhoQjlJql4KnQiLD7hxCvQhoCigPgFQrqJIrBBmQgvlsibnpQjqrlmhsaQAFILivJZQivJdj8FAQmzkcmAnsQkPlcjbmeQFmLRiWJiQiBINnUFWQjPCXj2BaQjvBYjvARQjxARjLg5QhZgZhMglQAYAVAbAZQCCB3EgEgQE6E4BnBhQDGC7AkgBQndC9rmFPQqnEzAAANQETgHFEA2QKIBwD1E6QCGCshpJFQhUHVjoLBQitIMjfI0Qh/FBgzByQBljECckOQFopyF0nyQIHq6HSlXQJGmsHQCZQA1DDijGLQiAE1kTHOQhpCwliIuQjsF1goBpQDMjCNIrRQNprtDqiuQHyKngYVdQgHGtg7G/QgeDggcCJQD9o2H7vSIHItiQDzi+DJhfQCwhVCvgXQCCgSDBANQBtAHD3AQQFwFaCqCxQDSDaBjCdQBmCgAfCkQAZCAgKC7QAYkVAOidQAbk5AgjRQBdphDUkfQGgEPGiKkQBrCuB1DaQjDm2hAmAQhlpeD2loQD8lyJCgpQJngsOHFVQhkhBiIhzQiciDhzh7Qk0lKCVhYQiAkBCGiKQBxhzEegVQDtgTEuAtQEHAoCgA+QkLiTk5jUQpzmojolFQjolEJQsaQC5j4D1kJQBrh0BPhOgEBbrgseIgWAVEgS6gmoQi2AaiygFQBSDvBMCFQBHB6A3ANQA1ANAZhcQAZhdgKiyQgFhVgMhdgEhcKgdzQhqg1hRhMQAigHCZCIgEhedA9EQgXAzgHAJEA0tAzBQAkBCAlBGQBUCiB8D0QikkZh1kFgEAd1A75IAEg3");
	this.shape_24.setTransform(667.7,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFF348","#FFE13B","#FFD331","#FECB2D","#FDC82C","#F3944B","#ED6F49","#E94A47"],[0,0.059,0.129,0.204,0.282,0.667,0.886,1],0,0,0,0,0,580.9).s().p("EgX6BJAQA7m/AImtQAX1dnyqoQjpCutqLuQtILQjMDDQAohqDtl0QFhovBpivQETnOCAk2QCjmKg1jDQnQiapGGtQnSFWoHK6QlzHzlpJxQicEPhkDDQAyhxCAlCQDfo0CsoLQDprBBTnVQBppGiGirQj1k7qHhvQlFg3kTAHQABgNKmkzQLmlPHei9QglACjGi7Qhnhik5k4QkhkgiCh3IgzguQBMAmBZAYQDLA5DxgRQDvgRDvhXQD2haDQiYQHTlVCBoNQCWpillrRQDaGeEPFcQGAHsGzEbQD8lACwpcQCupagFoLQGhMaDrLmQCaHoAvFtIgEAAIgDABIgBAAIgHABIgCAAQiMATiKAAIgBAAIAAAAIhAgBQBSDvBNCFQBGB7A3ANIAMABIAAAAIABAAQArAAAWhPIAAgBQAShCAAhsQAAgtgDg0QgFhVgMhdQLBhmLqpIQAPAEBoihQByivCLj7QF4qoDkpqQgNBpgGCuQgPFbAfFbQBfRUHyKnQDbijLzqkQKDpBELj+QgmBjjFFhQj/HJhwDbQnZOiBeFbQHRCZJWioQHgiHIelOQGEjuF9k6QCsiOBthnQhPBOhrB0Qj1EJi5D4QpPMZDoFFQDnFEJzGpQE5DUEMCSQigg9kIgoQkugtjsASQkfAVhwB0QiHCJCBECQiWBXE0FKQBzB8CcCDQCIByBkBBQuHlUpnArQpCApj8FzQj2FnBmJeQA/GADEG3IBICIQBUCiB8D0QikkZh0kFQh2jahriuQmiqkmgkQQjUEfhdJhQgfDRgcE6IgmGyQAKi8gYiAQggikhligQhkicjRjbQirixlvlZIllgYQjBgNiCASQiuAYiyBUQjIBgjzC+InINhQn7PTj8I2QAciKAdjfgEhcNgfuQAigGCZCHQhpg0hShNgAxC+QIgMgBQg3gNhGh7QhNiFhSjvIBAABIAAAAIABAAQCKAACMgTIACAAIAHgBIABAAIADgBIAEAAQAMBdAFBVQADA0AAAtQAABsgSBCIAAABQgWBPgrAAIgBAAIAAAAgEgQCgmhIAAAAg");
	this.shape_25.setTransform(649.3,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").ss(9).p("AEVjiQhaBWifCYQiCB+hHA/QCbgbBzhyQBvhrBFizg");
	this.shape_26.setTransform(343.1,228.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFF348","#FFE13B","#FFD331","#FECB2D","#FDC82C","#F3944B","#ED6F49","#E94A47"],[0,0.059,0.129,0.204,0.282,0.667,0.886,1],0,0,0,0,0,22).s().p("AgXAaID4jvQhFCzhuBrQhzByibAbQBHg/CCh9g");
	this.shape_27.setTransform(348.3,227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Goal, new cjs.Rectangle(-4.5,-540.8,1344.4,1083.5), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BC364").s().p("EiVKAJpIADz2MEqRAAlIgCT2g");
	this.shape.setTransform(954.7,728.6,1,1.272);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669C53").s().p("EiVJAJpIACz2MEqRAAlIgCT2g");
	this.shape_1.setTransform(954.9,566.9,1,1.272);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BC364").s().p("EiVKAJpIADz3MEqSAAmIgDT2g");
	this.shape_2.setTransform(955.7,83.3,1,1.272);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#669C53").s().p("EiVKAJpIADz2MEqSAAlIgDT2g");
	this.shape_3.setTransform(955.4,243.5,1,1.272);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BC364").s().p("EiVJAJpIACz2MEqRAAlIgCT2g");
	this.shape_4.setTransform(955.2,405.2,1,1.272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,1910.3,811.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EiVJAMgIAB5IMEqSAAJIgBZIg");
	mask_1.setTransform(954.6,80.9);

	// Layer_3
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C3C2C2").s().p("EgwmANmMAABggZMBhMAACMgABAllg");
	this.shape_26.setTransform(1877,121.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D34D44").s().p("EgrbAPdMAABghEMBW2AADMgABAjMg");
	this.shape_27.setTransform(1576,113.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C3C2C2").s().p("EgwmANmMAABggZMBhMAACMgABAllg");
	this.shape_28.setTransform(1348,121);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D34D44").s().p("EgraAPdMAABghEMBW0AADMgABAjMg");
	this.shape_29.setTransform(1047,113.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C3C2C2").s().p("EgwmANmMAABggZMBhMAACMgABAllg");
	this.shape_30.setTransform(809.6,120.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D34D44").s().p("EgraAPdMAABghEMBW0AADMgABAjMg");
	this.shape_31.setTransform(508.6,112.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C3C2C2").s().p("EgpPAOpIAB+bMBSeAADIgBfig");
	this.shape_32.setTransform(264,101.1);

	var maskedShapeInstanceList = [this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,1909.2,161.7), null);


(lib.field = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.field, null, null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AyZuCIEMDgQCfCFBzBUQCHBiCnBrQB+BQC5BwQCvBpC1giQAhCEBeB6QBABSCCB3QBdBUCQBzQCiCABQBBIAYATQAMALAIALQ2/oNt0z4g");
	this.shape.setTransform(21.2,37.7,0.098,0.098);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AwUKiQCahkBZhGQEMjSBmkEQBbAnBvgRQBFgKCBguQFVh4FKjVQEji6EvkSIAvgrIAOgCQhaDLkwEUQkeEEmQEDQmQEEmJC0QmiC/krAxQAzgkDIiCg");
	this.shape_1.setTransform(73.3,39.5,0.098,0.098);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AoRXGQgmhLgChOQgz4uNV0ZQAMgTAagPQAZgOAYgDQAtgFA/AAIBtAAQAGAAAKAFIAUAIQh4EohQFGQhJEsgpFRQgYC+gBB/QgCCsAgCPQAIAiARAzIAdBWQhoAzheBmQg3A9hiCLQiLDEheC5QhqDTg8DZQhBhLgghCg");
	this.shape_2.setTransform(6.3,-9.8,0.098,0.098);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("ADpXcQg2hnhpjQQhei4hIh7QipkfkAiNQBnioAcjgQAQiDgGkRQgOqDiipkQgCgJgBgPIgBgcQCLABCRArQB3AjCQBHQAKAGAKAQIAQAdQFvLUBzMfQBCHIgYHzQgHCkg/CdQg7CThwCYIhNiWg");
	this.shape_3.setTransform(91.2,-6.3,0.098,0.098);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AmAIPQhxg5johOQjShHkshVQirgxlXhgQg8gRgKgSQgKgTAcg0QA5hpBohlQA5g4CNhyQAVgQAsgfQAtgeAUgRQCDhqC4g0QB7gjDggaQNyhmNKDFQAeAHAOAFQAYAIANAMQCiCRBPBKQCKB+BhBjQCnCoAgDyIgvAGIgrAEQs8Anq5ECQhAAXhbAxQhlA5g2AbQhnh7i2hag");
	this.shape_4.setTransform(49.2,-39.5,0.098,0.098);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AxHeDQhRgHhSghQhngpgSg4IjxrhQiWnGhZkcQgwiZhBj0QhWlJgUhHQgLgnAIgcQAHgdAegZQBDg3CDhzQB3hlBUg/QLlonMhnWQBog9BUACQBYADBcBJQCHBqF9ElQFED5C8CZQCJBvDPC7QEWD7A8A0QBPBFAVBLQAWBNgiBnQlgRCmsOlQgtBjhIAtQhFArhqADQh0ACruAaIzGhjg");
	this.shape_5.setTransform(47.1,9.9,0.098,0.098);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AwGMSIgDgWQgKhTAKhxQAJhkBUhhQAxg5B1heQDgi0E3i3QDBhyF2jGQF8jIE6iUQAGgCAKCNQACArgBAeQgCA6gPAHQhcAriaBMQp9E7m6EMQiUBahnBFQiGBbhpBWQhpBYg1BAQgdAjgQAfQgHAOgHATIgCAEIAAABQAAgBAAAAQABAAAAABQAAAAgBAAQAAAAAAABIgCAPQgDAUgFAAQgFAAgDgSg");
	this.shape_6.setTransform(21.9,-30.4,0.098,0.098);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AOuNqQgQhuhVh6Qg8hWhuhtQjHjHkajFQjOiOlCi9QlSjHkSiFQgGgDgCgQIgCgWQgFgkAAg+QAIiOAHAEQBiAvCCBGQJNE5GeEwQCKBlBlBVQB9BqBeBoQBZBiAyBTQBABsAQBoQAMBVgHBpQgBAVgGAbQgFASgDAAQgDAAgDgQg");
	this.shape_7.setTransform(76.3,-27.7,0.098,0.098);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("Au9HfQgFg1AAgVIAAhJQABg9APgEIDehMQIzjCGiiqQEeh0CthaQBdgwA6goQAegVAMgKQAXgUAJgUQAEgJAEAJIAEAOQAFAQABAZIABAqQAEA4gBAeQAAA2gOAeQgLAYgcAYQgPAOgjAXQhBAth1A6QjYBrkaBwQirBElTB8QlLB5kdBfIgBAAQgFAAgFhBg");
	this.shape_8.setTransform(76.7,3.8,0.098,0.098);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AICK1IgEgOQgEgRgBgYIgCgcQgKgXgLgSQghg4g/hKQhwiHidiYQhnhki5ilQi7ipimiJQgGgFgCgOIgCgVQgFglAAg9QAAg+AFgkQAFgtAFAEQBPBBBIBAQC5CfCGB7QCoCcCICNQBQBTAqAxQBBBLArBEQAnA8AKAzQAKAtABA7QAAAqgDA/IgEAsQgDAZgIARQgCAEgCAAQgCAAgCgEg");
	this.shape_9.setTransform(63.8,35.9,0.098,0.098);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("EAK4AkbIgDgOQgFgQgBgYIgBgqQgCg2ADg1IACggQACgYAGgIIAigyQCTjTBtiMQCRi7CJiOQBZhbAegZQBPhBBCgFIAWgCIgGgeQgShbgXhYQgoimhNkCQhvlziZnCIhAi+QgkhsgXhUIhOkmIgBgIQgNgOgggWIhjhQQmJk7lUjmQjtihi0hgQhmg3hDgcQhggphTgQQhQgPhKAcQhDAYhCA8QhTBLhOBxQg5BThGCCQiOEFhoEcIAjCJQC6LOCeH4QA2CsAlBrQA1CZAzB6QAxB0AjA5QATAfAKALQATAYAVAEQANADACA+IAABJQAAAjgDAoQgEBCgIgCQgUgEgUgXQgKgLgTgdQgzhPgvhzQgVg0g2iZQhVjrhul2QiPnjiip6IgkiPQgNg+ABhCQAAhJAQg3QAahbAwhzQAYg6BBiPQBXjABHh8QBiipBrh2QA1g6AvgjQA9gtA8gPQAqgKA1AHQAmAFA2AQQCAAmCVBQQBeAzClBnQEEClFADyQDICXDGCiIAiAYQAVAQAKANQAGAIAFARIAGAcIAmCPIAlCPQAXBTAVA7QA+C1BJDaQCAGBA+DMQBjFJA8ENQAlCjALB0QAPCdgXB8QgFAfgIAMQgKASgYACQgtAFgtAaQggASguAnQhwBfh4COQhJBWiFCvQiCCshkCUQgDAEgCAAQgCAAgCgEg");
	this.shape_10.setTransform(17.5,17.8,0.098,0.098);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgtT3QgCgFgCgJQgFgRgBgYIgBgqIgChWQABgzALghQAYhDAPhwIADgSIAXk0IAAACIAAgCIAKmkQAAikgCiEIAAgMIAAgHIgFjsQgGjegJjeIgEhPIAAgCIAAgCIgBgKIgCg6QgEhLAAgVQAAg4AJgmQAOg0AHBmIAMEMQAaKRgGHqQgEF2gVD7QgMCbgKBCQgQB9ggBcQgCAEgCAAQgCAAgCgEg");
	this.shape_11.setTransform(48,-19.4,0.098,0.098);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAAQAAiJAQAAQARAAAACJQgBCKgQAAQgQAAAAiKg");
	this.shape_12.setTransform(9.5,-23.2,0.098,0.098);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Egd5BGzQtyl2qpqoQqpqpl0tyQmDuRAAvpQAAvnGDuSQF0tyKpqpQKpqpNyl1QOSmCPnAAQPpAAORGCQNyF1KpKpQKoKpF2NyQGCOSAAPnQAAPpmCORQl2NyqoKpQqpKotyF2QuRGCvpAAQvnAAuSmCg");
	this.shape_13.setTransform(48.5,0.8,0.098,0.098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(0.1,-47.6,96.8,96.7), null);


(lib.ShadranimTextbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("שדר 1 - שלוםםם וברוכים הבאים לאיצטדיון הידע, פה בסטאדי-סיטי. כאן משה טיצ'ר ואבי \nספר שיעבירו לכם את המשחק בשידור חי.\n\nשדר 2 - אם כן משה, מצפה לקבוצה משחק מאתגר, כאשר כדי להתקדם במסירות עד הבקעת השער יהיה עליהם לענות נכונה על השאלות ולהשתדל לא לטעות ולאבד את הכדור. הנה משה אני רואה את השופט מכניס את המשרוקית לפה...\n\nשדר 1 - קדימה בואו נעבור אל שריקת הפתיחה", "bold 11px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 16;
	this.text.lineWidth = 209;
	this.text.parent = this;
	this.text.setTransform(220.3,-103.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.4).p("Ax+x+MAj9AAAMAAAAj9Mgj9AAAg");
	this.shape.setTransform(115.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ax+R+MAAAgj7MAj9AAAMAAAAj7g");
	this.shape_1.setTransform(115.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ShadranimTextbox, new cjs.Rectangle(-1,-116,232.1,232.1), null);


(lib.shadranim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_701 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(701).call(this.frame_701).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292929").s().p("AgsA+QgPAAgLgKQgagYgMgbQgIgQAIgRQAJgRATgEQBCgMAuAFQBFAHALAuQAEANgIANQgHANgOAFIhFAXQgGACgGAAg");
	this.shape.setTransform(437.4,-78.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBCBC").s().p("AgdA7IAgipIAbAAIgODRIgMAMg");
	this.shape_1.setTransform(873,-91.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2A292A").ss(0.8).p("AFJg4IgFDjQgcAbgkgtQgSgXgNgcQgwBzg1gzQgbgZgRgxQg4BogxgwQgagYgOgtQhMBSgkguQgSgXgDgnQg+BEgqgoQgVgUgJgiIBYi6QAHgNANgGQAOgFANAFQEIBtECANg");
	this.shape_2.setTransform(841.4,-97.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BCBCBC").s().p("ACACmQgbgZgRgxQg4BogxgwQgagYgOgtQhMBSgkguQgSgXgDgnQg+BEgqgoQgVgUgJgiIBYi6QAHgNANgGQAOgFANAFQEIBtECANIgFDjQgcAbgkgtQgSgXgNgcQghBQgkAAQgQAAgQgQg");
	this.shape_3.setTransform(841.4,-97.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2A292A").ss(0.8).p("AEwAmIgHATQgLAVgOAMQgrAmg7hGIgFAWQgHAZgMAOQgmAshJhVIgLAZQgOAbgQAPQg0Aug0hqIgNAbQgRAegRAPQg3Awgrh1IgOAYQgSAbgQAOIAEjkQDggKDqhSQAVgHAVAJQAVAJAJAVg");
	this.shape_4.setTransform(904,-95.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BCBCBC").s().p("Aj/BYIgOAYQgSAbgQAOIAEjkQDggKDqhSQAVgHAVAJQAVAJAJAVIBJCtIgHATQgLAVgOAMQgrAmg7hGIgFAWQgHAZgMAOQgmAshJhVIgLAZQgOAbgQAPQg0Aug0hqIgNAbQgRAegRAPQgQAOgPAAQglAAgehTg");
	this.shape_5.setTransform(904,-95.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_6.setTransform(819.8,156.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AxODBIGnmCIb2AAInIGCg");
	this.shape_7.setTransform(819.8,156.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_8.setTransform(819.8,161.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AxODBIGnmCIb2AAInIGCg");
	this.shape_9.setTransform(819.8,161.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGCI7UAAg");
	this.shape_10.setTransform(807.8,166.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AxODBIGmmBIb2AAInIGBg");
	this.shape_11.setTransform(807.8,166.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGCI7UAAg");
	this.shape_12.setTransform(819.8,172.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AxODBIGnmCIb2AAInIGCg");
	this.shape_13.setTransform(819.8,172.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGCI7UAAg");
	this.shape_14.setTransform(830.8,175.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AxODBIGmmCIb2AAInIGCg");
	this.shape_15.setTransform(830.8,175.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_16.setTransform(442,149.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AxNDCIGlmCIb2AAInHGCg");
	this.shape_17.setTransform(441.9,149.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").ss(0.4).p("Ap6jBIZ9AAImoGDI5eAAg");
	this.shape_18.setTransform(449.4,155.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AwDDCIGJmDIZ+AAImpGDg");
	this.shape_19.setTransform(449.4,155.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_20.setTransform(442,159.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AxNDBIGlmBIb2AAInHGBg");
	this.shape_21.setTransform(441.9,159.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_22.setTransform(442,165.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AxNDBIGlmBIb2AAInHGBg");
	this.shape_23.setTransform(441.9,165.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGCI7UAAg");
	this.shape_24.setTransform(442,168.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AxNDCIGlmCIb2AAInHGCg");
	this.shape_25.setTransform(441.9,168.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").ss(0.4).p("EhbpgYDMC5kAAAMAAWAwHMi8hgADMACrguC");
	this.shape_26.setTransform(613,259.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3C3C3C").s().p("EheQAYBMACrguCIgEiCMC5kAAAMAAWAwHg");
	this.shape_27.setTransform(613,259.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").ss(0.8).p("AM7k+IiZBTQi+Bki2BRQpEECkXgaQkXgaAKAhQAFARA9AWQA+AdBTAZQCmAzBmgOQBhgNCdglQDag1CzhEQIPjIgEkGg");
	this.shape_28.setTransform(961.8,-92.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#342D2E").s().p("ApnEXQhTgag+gcQg9gWgFgRQgKgiEXAaQEXAbJEkCQC2hRC+hkICZhUQAEEGoPDIQizBFjaA0QidAmhhANQgWADgZAAQhbAAiCgog");
	this.shape_29.setTransform(961.8,-92.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").ss(0.6).p("ADQAAQAADEg8CKQg+CLhWAAQhWAAg9iLQg9iKAAjEQAAjCA9iLQA+iLBVAAQBWAAA+CLQA8CLAADCg");
	this.shape_30.setTransform(1044.1,-162.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#342D2E").s().p("AiSFOQg+iKABjEQgBjCA+iLQA9iLBVAAQBXAAA9CLQA8CLAADCQAADEg8CKQg9CLhXAAQhVAAg9iLg");
	this.shape_31.setTransform(1044.1,-162.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").ss(0.6).p("ADPAAQAAC+g9CGQg8CHhWAAQhVAAg8iHQg9iGAAi+QAAi9A9iGQA8iHBVAAQBWAAA8CHQA9CGAAC9g");
	this.shape_32.setTransform(700.5,-167.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#342D2E").s().p("AiRFEQg9iHAAi9QAAi9A9iHQA8iGBVAAQBWAAA8CGQA9CHAAC9QAAC+g9CGQg8CHhWAAQhVAAg8iHg");
	this.shape_33.setTransform(700.5,-167.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").ss(0.8).p("Ac1NPQAACugbCwIh3AAIABgNIBUAMQgUltguj9QhHl/iXkeQmTr/vjiKQnvhFmRD6QlBDJj1GKQivEZh4FeQg8CvgZB3IA7AIQgVCRAACUQAABhAJBeIh4AAQgbiuAAiwQAAmgCRl8QCMluEAkaQD/kbFLibQFXihF2AAQF4AAFWChQFMCbD/EbQD/EaCMFuQCRF8AAGgg");
	this.shape_34.setTransform(873.2,-290.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#342D2E").s().p("AaiStIABgNIBUAMQgTltgvj9QhHl/iXkeQmTsAviiJQnwhFmQD6QlBDJj1GKQivEYh4FfQg8CvgZB3IA6AIQgUCRAACUQAABgAJBfIh3AAQgciuAAixQAAmfCRl8QCMluEAkaQD/kcFLiaQFWihF3AAQF4AAFWChQFMCaD+EcQEAEaCMFuQCRF8AAGfQAACvgbCwg");
	this.shape_35.setTransform(873.2,-290.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#595959").ss(5.4).p("AhyFNQgxkMAKi9QAJimBAgRQBQgWChDX");
	this.shape_36.setTransform(904.5,-378.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#595959").ss(5.4).p("AidFPQghkNAai+QAXinBIgSQBZgWCiDX");
	this.shape_37.setTransform(879.5,-382.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#595959").ss(5.4).p("AiNE7QgnkCAUiyQARidBFgMQBVgPCiDW");
	this.shape_38.setTransform(853.1,-383.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#2A292A").ss(5.1).p("AkDmBQgNgVAAgZQAAgZAOgVQAzhQg4ikQgehYhOiTQgGgNAKgJQAKgJAMAHIB3BJIAEAEQFvFPA4BRQAgAvgEAkQgCARgcA9QhSCzBqHAQA1DgBFC9IgwgmQg7gog4gNQizgqhJDzIAEi2IgFiXQgJifgci9Qg5l5heiXg");
	this.shape_39.setTransform(1021.6,-275.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BCBCBC").s().p("AgzLSIgFiXQgKifgci9Qg4l5heiXQgNgVAAgZQAAgZANgVQAzhQg4ikQgdhYhOiTQgHgNALgJQAKgJALAHIB3BJIAFAEQFuFPA4BRQAhAvgFAkQgCARgcA9QhSCzBqHAQA1DgBGC9IgxgmQg7gog4gNQiygqhKDzg");
	this.shape_40.setTransform(1020.2,-283.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#2A292A").ss(5.1).p("ADtltQAOgWAAgYQgBgZgNgVQgzhQA4ikQAdhXBOiVQAEgHAggjQAZgdgJAFIjJB3QluFQg4BRQghAvAFAkQACARAcA9QBSCzhqHAQg1DghGC8QBLhFBZgWQCygqBKD0IgFi3IAFiWQAKifAci9QA5l5BdiXg");
	this.shape_41.setTransform(722,-270.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BCBCBC").s().p("AjdLTQhZAVhLBGQBGi9A1jgQBqm/hSizQgcg9gCgRQgFglAhgvQA4hQFulQIDJh3QAJgGgZAdQggAkgEAHQhOCVgdBWQg4ClAzBPQANAVABAZQAAAZgOAVQhdCXg5F5QgcC9gKCfIgFCXIAFC2QhKjziyAqg");
	this.shape_42.setTransform(723.8,-278.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#59473D").ss(2.7).p("AhRi9QAyA3ArBLQBYCVgdBk");
	this.shape_43.setTransform(933.6,-116);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F4BB94").s().p("AhPi9QAyA3ArBLQBYCVgdBkg");
	this.shape_44.setTransform(933.5,-116);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#59473D").ss(2.7).p("ABsifIgkAbQgrAhgiAlQhvB1AQBm");
	this.shape_45.setTransform(808.9,-116.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F4BB94").s().p("AgHg8QAhglAsgiIAkgaIjQE7QgQhmBvh0g");
	this.shape_46.setTransform(809.2,-116.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#59473D").ss(3).p("AF1BbIgogfQgygkgygcQighdhjAMQiYARhFATQhmAdgSAx");
	this.shape_47.setTransform(793.1,-211);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#292929").s().p("AgzA0QgWgVAAgfQAAgeAWgVQAWgWAdABQAfgBAVAWQAWAVAAAeQAAAfgWAVQgVAVgfABQgdgBgWgVg");
	this.shape_48.setTransform(794.8,-202.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#964C35").s().p("AiDBvQgYgTAAhDQAAg/AuguQAuguA/AAQBBAAAtAuQAuAuAAA/QAABAggAUQgfAUhmACIgNAAQhUAAgZgUg");
	this.shape_49.setTransform(794.8,-203);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AEIChQiFgai6gVQi0gTg4AEQgbACgZgUQgYgTgOgdQgghGA0gnQBHg1BzgYQCWgfCQAtQAyAaA3AgQBuBAAXAcQArA2gHA0QgGAyhEAAQgXAAgggGg");
	this.shape_50.setTransform(794.7,-203);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#765949").s().p("AEMBNQidhpjxgGQh5gDhaASIBkg+QDogCCAAoQAwAOAxAaIBSAsQBGAmgrADIgJAAQgUAAgcgFg");
	this.shape_51.setTransform(796.3,-222.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#59473D").ss(3).p("AlyBbQA8gxBQgtQCghdBkALQCZASBDATQBnAcASAx");
	this.shape_52.setTransform(952.9,-212.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#292929").s().p("AgzA0QgWgVAAgfQAAgeAWgVQAWgWAdAAQAfAAAVAWQAWAVAAAeQAAAegWAWQgVAWgfAAQgdAAgWgWg");
	this.shape_53.setTransform(951.4,-203.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#964C35").s().p("AAKCCQhmgCgfgTQgggUAAhAQAAhAAugtQAuguA/AAQBBAAAtAuQAuAtAABAQAABDgYATQgZAUhRAAIgQgBg");
	this.shape_54.setTransform(951.4,-204.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AmIB0QgHgzArg3QAYgcBtg/IBpg6QCQgtCWAfQBzAXBHA1QA1AoghBGQgOAdgYATQgZATgagCQg5gEi0AUQi6AUiFAaQgfAHgYAAQhDAAgHgzg");
	this.shape_55.setTransform(951.5,-204.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#765949").s().p("AkpApQA2gfAcgNQAxgZAwgPQCBgoDnACIBkA/Ig8gJQhLgIhMACQjxAGidBoIg5AFQgrgDBGgmg");
	this.shape_56.setTransform(949.9,-223.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#59382D").s().p("AitCdQAshAAvhQQBdigAShSQARhSBCgEQAUgCAXAHIATAHIgiAEQglAPgOA4IgXBaIAXAuQAaA5AKA0QAfCoiHA/QAQggANgzQAYhmgWhfQgWhhgNAoQgGAUgCAnIisFbg");
	this.shape_57.setTransform(1027.8,-148);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#59473D").ss(2.7).p("AgpocQA0gVBFAAQCIACBLBsQAsBAAHCCQAHB+geCFQggCNg+BdQhGBnhbAOIg3ArQhCAyg6AlQi7B3geg8Qgeg7Azh8IA4hvIBPrBg");
	this.shape_58.setTransform(1033.9,-154.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F4BB94").s().p("AlMIeQgeg7Azh8IA4hvIBPrBICHhTQA0gVBFAAQCIACBLBsQAsBAAHCCQAHB+geCFQggCNg+BdQhGBnhbAOIg3ArQhCAyg6AlQh9BPg2AAQgcAAgKgUg");
	this.shape_59.setTransform(1033.9,-154.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#59382D").s().p("AgDgeQgBgngHgUQgMgogWBhQgWBfAYBmQAMAzAQAgQiHg/AgioQAKg0AZg5IAYguIgXhaQgPg4glgPQgTgHgPADQAdgOAhACQBCAEASBSQARBSBWCzQArBaAnBKIAGB5g");
	this.shape_60.setTransform(719,-149);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#59473D").ss(2.7).p("ABRoTIgjgKQgrgLgqABQiIABhLBsQgtBAgHCCQgHB+AfCFQAgCOA+BcQBGBoBbANQA+BCBGA2QCLBsAdg7QAeg8gDhxIgJhlIiNrng");
	this.shape_61.setTransform(706.5,-149);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4BB94").s().p("ABtHiQhGg2g+hCQhbgNhGhoQg+hcggiOQgfiFAHh+QAHiCAthAQBLhsCIgBQAqgBArALIAjAKIBJAtICNLnIAJBlQADBxgeA8QgKAVgZAAQgsAAhZhGg");
	this.shape_62.setTransform(706.5,-149);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#765949").s().p("Ag9A4IgegXQgpgZgvgLQg0gMgZgVQgVgSAJgOQAfALAnAJQBNASAigHQAjgGAbAWIAUAWIAmgiQBDgTAmAAQAiAAAwgPQApgNALgOIgEAJQgMAUgSASQg5A7hkAaIgJAQQgMATgOAKQgSAMgSAAQghAAgmgng");
	this.shape_63.setTransform(872.4,-134.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#545454").s().p("AIsCtQgggvgsgsQiNiMjRgyQjPgzjfBiQhwAxhGA5QhuAPARgyQAFgPARgUIARgSQGHj5GIB3QB7AlBsBGIBUA+IARDYg");
	this.shape_64.setTransform(958.8,-238.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#545454").s().p("AovC9QguAAAShEIAchEQCvjWD0gYQBWgIBiAPQAVADB4AZQBhAVBbA3QAkAXCMBmQBSA9hFAMQgiAFgzgGQlBikicguQiDgoh8ATQhXANhgCQIhBBhQghArgXAAIAAAAg");
	this.shape_65.setTransform(790.6,-238.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#59473D").ss(3).p("A79hMQgUA7AAA+QAAA+AUA7QCSGoC0FWQEcIcEfCYQDdB4BIAnQByA9A9AVQBGAZBbAFQBEAFC6gDQFDgFGOi8QCvhTB/heQCDhgAuhRQDalwCLkIQEHn0gBiuQAAiIieoJQhqlgicnNQgghfkciHQhxg1hwgnQhugmg3gGIkwhUQi+gUiWgBQlXgCjaBOIpTDwQhWAbhAA/QhAA/gdBVg");
	this.shape_66.setTransform(867.5,-207.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F4BB94").s().p("AkHdnQhbgFhGgZQg9gVhyg9IklifQkfiYkcocQi0lWiSmoQgUg7AAg+QAAg+AUg7IGuzzQAdhVBAg/QBAg/BWgbIJTjwQDahOFXACQCWABC+AUIEwBUQA3AGBuAmQBwAnBxA1QEcCHAgBfQCcHNBqFgQCeIJAACIQABCukHH0QiLEIjaFwQguBRiDBgQh/BeivBTQmOC8lDAFIiCABQhTAAgpgDg");
	this.shape_67.setTransform(867.5,-207.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#342D2E").s().p("AhBCFIh/hAIDHjIIC6DIIg7BAg");
	this.shape_68.setTransform(861.9,3.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#373535").ss(1.2).p("AgVAkIkGEJIiOhVIi9nOICMg3IHFFRIFUjeIElhiIjKHpIi8Bgg");
	this.shape_69.setTransform(864.7,-13.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgTAkIFTjdIEmhjIjKHpIi8BhgAmnDYIi+nOICNg3IHFFRIkGEKgAgTAkg");
	this.shape_70.setTransform(864.6,-13.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#373535").ss(1.2).p("Ai/hZQAtBiBHAxQCNBjB/j2");
	this.shape_71.setTransform(861.8,19.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#342D2E").s().p("AhLA8QhHgyguhhIGBAAQhbCvhiAAQgnAAgogcg");
	this.shape_72.setTransform(861.9,19.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#373535").ss(1.2).p("AhemlIhhFTIDGHqIC6n0IhelJ");
	this.shape_73.setTransform(861.8,65.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#342D2E").s().p("AjAhLIBhlTIDCAAIBeFJIi6H0g");
	this.shape_74.setTransform(861.9,65.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#373535").ss(4).p("ApTsfIiwBxQiwB6gEAxQgEAxBxC2IByCsID3gYIAABJIhUFQIEhIZII2AAIEhoZIhgmZIDSAlID+mOIhuh0QiAh8hegmIppWOg");
	this.shape_75.setTransform(862.8,42.6,1,1,0,0,0,0,0.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#525251").s().p("AkRMlIkhoZIBUlQIAAhJIj3AYIhyisQhxi2AEgxQAEgxCwh6ICwhxIJQWmIJq2OQBeAmCAB8IBuB0Ij+GOIjSglIBgGZIkhIZg");
	this.shape_76.setTransform(862.5,42.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ah/FwQgDgQicl9IjQn+IH7AAIFbggICHAAIgzB4IhuGwIijE7IiuEUQh3izgFgZg");
	this.shape_77.setTransform(865.4,57.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#373535").ss(4).p("AuvqXIolEVIgsBtQg1CJgpCGQiFGrAeDxMA2PAAAQgNjJgjjlQhFnLhqiTIowkP");
	this.shape_78.setTransform(862,56.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#525251").s().p("A7EKXQgfjxCFmrQAqiGA0iJIAthtIIkkVIdqASIIxEPQBpCTBGHLQAiDmAODIg");
	this.shape_79.setTransform(862,56.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#373535").ss(0.8).p("AM7k+IiZBTQi+Bki2BRQpEECkXgaQkXgaAKAhQAFARA8AWQA/AdBTAZQClAzBngOQBhgNCdglQDag1CzhEQIPjIgEkGg");
	this.shape_80.setTransform(535.1,-108.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#342D2E").s().p("ApnEXQhTgag/gcQg8gWgFgRQgKgiEXAaQEXAbJEkCQC2hRC+hkICZhUQAEEGoPDIQizBFjaA0QidAmhhANQgWADgZAAQhbAAiCgog");
	this.shape_81.setTransform(535.1,-108.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#373535").ss(0.6).p("ADRAAQAADEg9CKQg9CLhXAAQhVAAg9iLQg9iKAAjEQAAjDA9iKQA9iLBVAAQBXAAA9CLQA9CKAADDg");
	this.shape_82.setTransform(617.3,-179);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#342D2E").s().p("AiTFOQg9iKAAjEQAAjDA9iKQA9iLBWAAQBXAAA8CLQA9CKAADDQAADEg9CKQg8CLhXAAQhWAAg9iLg");
	this.shape_83.setTransform(617.3,-179);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#373535").ss(0.6).p("ADPAAQAAC+g9CHQg8CGhWAAQhVAAg9iGQg8iHAAi+QAAi9A8iGQA9iHBVAAQBWAAA8CHQA9CGAAC9g");
	this.shape_84.setTransform(269.1,-165.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#342D2E").s().p("AiSFEQg8iGAAi+QAAi9A8iGQA9iHBVABQBWgBA8CHQA9CGAAC9QAAC+g9CGQg8CGhWAAQhVAAg9iGg");
	this.shape_85.setTransform(269.1,-165.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#373535").ss(0.8).p("Ac1L8QAACfgbCeIh3AAIAAgMIBUALQgTlKgvjkQhGlaiXkCQmTq1vjh8Qnvg+mRDiQlAC1j2FkQivD9h4E8Qg8CegZBsIA7AHQgVCCAACGQAABVAJBYIh4AAQgbifAAieQAAl3CRlXQCMlKEAj/QD/kAFLiMQFWiRF3AAQF4AAFWCRQFLCMD/EAQEAD/CMFKQCRFXAAF3g");
	this.shape_86.setTransform(446.5,-294.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#342D2E").s().p("AaiQ5IABgMIBUALQgTlKgvjkQhGlaiYkCQmTq1vih8Qnwg+mQDiQlBC1j1FkQivD9h4E8Qg8CegZBsIA6AHQgUCCAACGQAABVAJBYIh4AAQgbifAAieQAAl3CRlXQCMlKEAj/QD+kAFMiMQFWiRF3AAQF4AAFWCRQFLCMD/EAQEAD/CMFKQCRFXAAF3QAACfgcCeg");
	this.shape_87.setTransform(446.5,-294.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E5343E").s().p("AhACEIiAg/IDHjJIC5DJIg6A/g");
	this.shape_88.setTransform(430.9,3.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#2A292A").ss(5.1).p("AiPgiQAegbAzAAQBngBBtCG");
	this.shape_89.setTransform(547.5,-336.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#545454").s().p("AiSgnQAegbA0AAQBmAABtCFg");
	this.shape_90.setTransform(547.8,-336.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#2A292A").ss(5.1).p("AjEBxQAqh6Cug2QA2gQBBgJQA2gGADgB");
	this.shape_91.setTransform(312.7,-316.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#545454").s().p("AAUhHQA2gRBBgJIA6gGImJDPQAqh6Cug1g");
	this.shape_92.setTransform(312.7,-315.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#2A292A").ss(5.1).p("AczMWQgxhIiVBAQhLAghBAvQg5j/ggj/QgSiKgTjtQgQi7gOhKQgWhugvg6QiECNnBAFQjgADjGgaQm1imnZAWQjtAMiVAsIiPCJQiABVhKG4QglDdgMDLIgECXIAFC2QhMjziyAqQhZAWhKBGQBFi9A0jgQBpnBhSiyQgXgyAJgyQAKg4A2hMQBpiUF0lVQCzikF0hJQE9g+GlAKQFqAJFbA5QE/A1CLBAQDYBjAtDdQAXBvgVBaQDpA3APD6QAIB9gnBwIA9GKQA0F8gwhIg");
	this.shape_93.setTransform(434.4,-284);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#545454").s().p("A6UNwQhZAVhKBGQBFi8A0jhQBpnBhSixQgXgyAJgyQAKg4A2hMQBpiUF0lWQCzikF0hIQE9g+GlAKQFqAJFbA5QE/A1CLA/QDYBkAtDdQAXBugVBbQDpA3APD5QAIB8gnByIA9GKQA0F7gwhHQgxhIiVBAQhLAghBAuQg5j/ggj/QgSiJgTjuQgQi7gOhKQgWhtgvg6QiECMnBAGQjgACjGgZQm1imnZAWQjtALiVAsIiPCJQiABWhKG4QglDcgMDMIgECWIAFC3QhMj0iyArg");
	this.shape_94.setTransform(436.2,-292);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#59473D").ss(2.7).p("AhRi9QAyA3ArBLQBYCVgdBk");
	this.shape_95.setTransform(500.6,-112.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F4BB94").s().p("AhPi9QAyA3ArBLQBYCVgdBkg");
	this.shape_96.setTransform(500.5,-112.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#59473D").ss(2.7).p("ABsifIgkAbQgrAigiAkQhvB1AQBm");
	this.shape_97.setTransform(375.9,-112.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F4BB94").s().p("AgHg8QAiglArgiIAkgaIjQE7QgQhmBvh0g");
	this.shape_98.setTransform(376.2,-113);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#59473D").ss(3).p("AF1BbIgogfQgygkgygcQighdhjAMQiZARhEATQhmAcgSAx");
	this.shape_99.setTransform(360.1,-207.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#292929").s().p("AgzA0QgWgVAAgfQAAgdAWgWQAVgWAeAAQAfAAAVAWQAWAWAAAdQAAAfgWAVQgWAWgeAAQgeAAgVgWg");
	this.shape_100.setTransform(361.8,-198.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#964C35").s().p("AiDBvQgYgTAAhDQAAhAAugtQAuguA/AAQBAAAAuAuQAuAtAABAQAABAggAUQgfAUhmACIgMAAQhVAAgZgUg");
	this.shape_101.setTransform(361.8,-199.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AEIChQiFgbi6gUQi0gUg4AFQgbACgZgUQgYgTgOgdQgghGA0goQBHg1BzgXQCWgfCQAtQAyAaA3AgQBuA/AXAdQArA2gHA0QgGAyhEAAQgYAAgfgGg");
	this.shape_102.setTransform(361.7,-199.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#765949").s().p("AEMBNQidhpjxgGQh5gDhaASIBkg+QDogCCAAoQAwAOAxAaIBSAsQBGAmgrACIgJABQgUAAgcgFg");
	this.shape_103.setTransform(363.3,-218.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#59473D").ss(3).p("AlyBbQA8gxBQguQCghdBkAMQCYARBEATQBmAdATAx");
	this.shape_104.setTransform(519.9,-208.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#292929").s().p("AgzA0QgWgVAAgfQAAgdAWgWQAWgWAdAAQAfAAAVAWQAWAWAAAdQAAAfgWAVQgVAVgfAAQgdAAgWgVg");
	this.shape_105.setTransform(518.4,-199.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#964C35").s().p("AAKCDQhmgCgfgUQgggUAAhAQAAg/AuguQAuguA/AAQBBAAAtAuQAuAuAAA/QAABDgYATQgZAUhVAAIgMAAg");
	this.shape_106.setTransform(518.4,-200.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AmIB1QgHg0Arg2QAYgcBthAIBpg6QCQgtCWAfQB0AYBGA1QA1AnghBGQgOAdgYATQgZAUgbgCQg4gEi0ATQi6AViFAaQggAGgXAAQhEAAgGgyg");
	this.shape_107.setTransform(518.5,-200.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#765949").s().p("AkpApQA2gfAcgNQAxgaAwgOQCAgoDoACIBkA+Ig8gIQhLgJhMACQjxAGidBpIg5AFQgrgDBGgmg");
	this.shape_108.setTransform(516.9,-220);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#59382D").s().p("AitCdQAshAAvhQQBdigAShSQARhSBCgEQAUgCAXAHIATAHIgiAEQglAPgOA4IgXBaIAXAuQAaA5AKA0QAfCoiHA/QAQggANgzQAYhmgWhfQgWhhgNAoQgGAUgCAnIisFbg");
	this.shape_109.setTransform(594.8,-144.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#59473D").ss(2.7).p("AgpocQA0gVBFAAQCIABBLBtQAsBAAHCCQAHB+geCEQggCOg+BdQhGBnhbAOIg4ArQhCAyg6AlQi6B3geg8Qgeg7Azh8QAQgmAVgoIATghIBPrBg");
	this.shape_110.setTransform(600.9,-151);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F4BB94").s().p("AlMIeQgeg7Azh8QAQgmAVgoIATghIBPrBICHhTQA0gVBFAAQCIABBLBtQAsBAAHCCQAHB+geCEQggCOg+BdQhGBnhbAOIg4ArQhCAyg6AlQh8BPg2AAQgcAAgKgUg");
	this.shape_111.setTransform(600.9,-151);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#59382D").s().p("AgDgeQgBgngHgUQgMgogWBhQgWBfAYBmQAMAzAQAgQiHg/AgioQAKg0AZg5IAYguIgXhaQgPg4glgPQgTgHgPADQAdgOAhACQBCAEASBSQARBSBWCzQArBaAnBKIAGB5g");
	this.shape_112.setTransform(286,-145.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#59473D").ss(2.7).p("ABRoTIgjgKQgrgLgqABQiIABhLBtQgtBAgHCCQgHB+AeCEQAhCOA9BcQBGBoBbANQA/BCBFA3QCMBsAdg8QAeg7gDhxIgJhlIiNrog");
	this.shape_113.setTransform(273.5,-145.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F4BB94").s().p("ABsHjQhFg3g/hCQhbgNhGhoQg9hcghiOQgeiEAHh+QAHiCAthAQBLhtCIgBQAqgBArALIAjAKIBJAtICNLoIAJBlQADBxgeA7QgKAVgZAAQgsAAhahFg");
	this.shape_114.setTransform(273.5,-145.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#765949").s().p("AhWA4IgrgXQg4gZhCgLQhJgMgigVQgdgSALgOQAsALA2AJQBsASAwgGQAxgHAlAWIAcAWIA1giQBegTA2AAQAwAABBgPQA7gNAPgOIgGAJQgRAUgZASQhQA7iLAaIgNAQQgQATgVAKQgXAMgaAAQguAAg2gng");
	this.shape_115.setTransform(438,-125.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#545454").s().p("AIiDNQghgngsgmQiNh5jMhBQjLhCjaAyQhtAYhFAmQhvAHAVgxQAGgQATgTIASgQQGZjaF+CVQB3AvBnBOIBOBDIAADag");
	this.shape_116.setTransform(528.6,-242.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#545454").s().p("ApFClIARhHQCMjvDug9QBTgVBlgBQATAAB6AHQBkAFBiApQAoARCaBQQBaAwhCAWQghAKgzABQkzhki8AYQhBAJhIAaIhxApQhTAahRBkQgvA7gHAHQgcAegXADIgIABQglAAAHhAg");
	this.shape_117.setTransform(346.2,-242.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#59473D").ss(3).p("A8bAHIBGDOQBaD8BoDhQFNLPFVC0QDdB4BIAnQByA9A8AWQBGAYBbAGQBEAEC5gDQFEgFGOi8QCvhSCAheQCDhgAuhSQDZlwCMkIQEHnzgBivQgBisj5sMQhOj0hdkUIhOjiI5sitIvFEwg");
	this.shape_118.setTransform(434,-200.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F4BB94").s().p("Aj9dFQhbgGhGgYQg8gWhyg9IkmifQlVi0lMrPQhojhhaj8IhHjOIIU4dIPFkwIZtCtIBNDiQBeEUBND0QD6MMAACsQABCvkHHzQiLEIjaFwQguBSiCBgQiBBeiuBSQmOC8lEAFIh9ABQhWAAgqgCg");
	this.shape_119.setTransform(434,-200.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#373535").ss(1.2).p("AgVAkIkGEJIiNhVIi+nOICMg3IHFFRIFUjeIEmhiIjLHpIi8Bgg");
	this.shape_120.setTransform(433.7,-13.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgUAlIFUjfIEmhiIjLHpIi8BggAmnDYIi+nOICMg3IHFFSIkGEIgAgUAlg");
	this.shape_121.setTransform(433.6,-13.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#373535").ss(1.2).p("Ai/hZQAtBiBHAxQCNBjB/j2");
	this.shape_122.setTransform(430.8,19.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E5343E").s().p("AhLA8QhHgyguhhIGAAAQhaCvhiAAQgnAAgogcg");
	this.shape_123.setTransform(430.9,19.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#373535").ss(1.2).p("AhemlIhhFUIDGHpIC6n0IhelJ");
	this.shape_124.setTransform(430.8,65.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E5343E").s().p("AjAhKIBhlUIDCAAIBdFJIi5H0g");
	this.shape_125.setTransform(430.9,65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333332").s().p("AkRMlIkhoZIBUlQIAAhJIj3AZIhyitQhxi2AEgxQAEgxCwh6ICwhxIJQWmIJq2OQBeAmCAB8IBuB0Ij9GOIjTglIBgGZIkhIZg");
	this.shape_126.setTransform(431.5,42.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("Ah/FwQgDgQicl8IjQoAIH7AAIFbgfICHAAIgzB4IhuGwIijE7IiuEUQh3izgFgZg");
	this.shape_127.setTransform(434.4,57.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333332").s().p("A7EKXQgfjxCFmrQAqiGA0iJIAthtIIkkVIdqASIIxEPQBpCTBGHLQAiDlAODJg");
	this.shape_128.setTransform(431,56.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#A03335").s().p("Ag+gcQBThIBoBaIj6BHQAVg2Aqgjg");
	this.shape_129.setTransform(449.4,-77);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A03335").s().p("Ah9AkID6hHQgHApgTAeg");
	this.shape_130.setTransform(449.4,-74.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FDFEFE").s().p("AgEApQhAgCg1gVQg4gWgXgkIGRAAQg0BRiKAAIgPAAg");
	this.shape_131.setTransform(439.1,-66.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FDFEFE").s().p("AjNgPQANgGAdgGQA7gMBOgBQA3gBAhAFQAPACAqAMQAnAKAcAbIAUAag");
	this.shape_132.setTransform(439.7,-88.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#292929").s().p("AhfCGQggAAgZgWQg3gygbg8QgRgjASglQATgkAogHQCPgcBkALQCUAQAYBiQAIAegQAcQgQAcgfALIiTAxQgNAEgOAAg");
	this.shape_133.setTransform(437.6,-78.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#292929").s().p("AhDAGIgpgBQgngCgTgDQgMAAANgCQAOgBAcgBICrAAQBqAAARAEQAGABgMABIghABIhoACIgTABg");
	this.shape_134.setTransform(437.4,-74.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},7).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},8).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},7).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},8).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},7).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},352).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_134},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(2));

	// shadran1
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#292929").s().p("AhDAGIgpgBQgngCgTgDQgMAAANgCQAOgBAcgBICrAAQBqAAARAEQAGABgMABIghABIhoACIgTABg");
	this.shape_135.setTransform(874.9,-65);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#292929").s().p("AhDAGIgpgBQgngCgTgDQgMAAANgCQAOgBAcgBICrAAQBqAAARAEQAGABgMABIghABIhoACIgTABg");
	this.shape_136.setTransform(437.9,-74.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#BCBCBC").s().p("AgdA7IAgipIAbAAIgODRIgMAMg");
	this.shape_137.setTransform(872.7,-91.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#2A292A").ss(0.8).p("AFJg4IgFDjQgcAbgkgtQgSgXgNgcQgwBzg1gzQgbgZgRgxQg4BogxgwQgagYgOgtQhMBSgkguQgSgXgDgnQg+BEgqgoQgVgUgJgiIBYi6QAHgNANgGQAOgFANAFQEIBtECANg");
	this.shape_138.setTransform(841.2,-97.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BCBCBC").s().p("ACACmQgbgZgRgxQg4BogxgwQgagYgOgtQhMBSgkguQgSgXgDgnQg+BEgqgoQgVgUgJgiIBYi6QAHgNANgGQAOgFANAFQEIBtECANIgFDjQgcAbgkgtQgSgXgNgcQghBQgkAAQgQAAgQgQg");
	this.shape_139.setTransform(841.2,-97.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#2A292A").ss(0.8).p("AEwAmIgHATQgLAVgOAMQgrAmg7hGIgFAWQgHAZgMAOQgmAshJhVIgLAZQgOAbgQAPQg0Aug0hqIgNAbQgRAegRAPQg3Awgrh1IgOAYQgSAbgQAOIAEjkQDggKDqhSQAVgHAVAJQAVAJAJAVg");
	this.shape_140.setTransform(903.8,-95.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BCBCBC").s().p("Aj/BYIgOAYQgSAbgQAOIAEjkQDggKDqhSQAVgHAVAJQAVAJAJAVIBJCtIgHATQgLAVgOAMQgrAmg7hGIgFAWQgHAZgMAOQgmAshJhVIgLAZQgOAbgQAPQg0Aug0hqIgNAbQgRAegRAPQgQAOgPAAQglAAgehTg");
	this.shape_141.setTransform(903.8,-95.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_142.setTransform(819.5,156.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AxODBIGnmCIb2AAInIGCg");
	this.shape_143.setTransform(819.5,156.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_144.setTransform(819.5,161.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AxODBIGnmCIb2AAInIGCg");
	this.shape_145.setTransform(819.5,161.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGCI7UAAg");
	this.shape_146.setTransform(807.5,166.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AxODBIGmmBIb2AAInIGBg");
	this.shape_147.setTransform(807.5,166.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGCI7UAAg");
	this.shape_148.setTransform(819.5,172.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AxODBIGnmCIb2AAInIGCg");
	this.shape_149.setTransform(819.5,172.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGCI7UAAg");
	this.shape_150.setTransform(830.5,175.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AxODBIGmmCIb2AAInIGCg");
	this.shape_151.setTransform(830.5,175.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_152.setTransform(441.7,149.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AxNDCIGlmCIb2AAInHGCg");
	this.shape_153.setTransform(441.7,149.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#373535").ss(0.4).p("Ap6jBIZ9AAImoGDI5eAAg");
	this.shape_154.setTransform(449.2,155.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AwDDCIGJmDIZ+AAImpGDg");
	this.shape_155.setTransform(449.1,155.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_156.setTransform(441.7,159.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AxNDBIGlmBIb2AAInHGBg");
	this.shape_157.setTransform(441.7,159.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGDI7UAAg");
	this.shape_158.setTransform(441.7,165.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AxNDBIGlmBIb2AAInHGBg");
	this.shape_159.setTransform(441.7,165.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#373535").ss(0.5).p("AqojBIb2AAInIGCI7UAAg");
	this.shape_160.setTransform(441.7,168.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AxNDCIGlmCIb2AAInHGCg");
	this.shape_161.setTransform(441.7,168.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#373535").ss(0.4).p("EhbpgYDMC5kAAAMAAWAwHMi8hgADMACrguC");
	this.shape_162.setTransform(612.8,259.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#3C3C3C").s().p("EheQAYBMACrguCIgEiCMC5kAAAMAAWAwHg");
	this.shape_163.setTransform(612.8,259.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#373535").ss(0.8).p("AM7k+IiZBTQi+Bki2BRQpEECkXgaQkXgaAKAhQAFARA9AWQA+AdBTAZQCmAzBmgOQBhgNCdglQDag1CzhEQIPjIgEkGg");
	this.shape_164.setTransform(961.6,-92.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#342D2E").s().p("ApnEXQhTgag+gcQg9gWgFgRQgKgiEXAaQEXAbJEkCQC2hRC+hkICZhUQAEEGoPDIQizBFjaA0QidAmhhANQgWADgZAAQhbAAiCgog");
	this.shape_165.setTransform(961.6,-92.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#373535").ss(0.6).p("ADQAAQAADEg8CKQg+CLhWAAQhWAAg9iLQg9iKAAjEQAAjCA9iLQA+iLBVAAQBWAAA+CLQA8CLAADCg");
	this.shape_166.setTransform(1043.8,-162.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#342D2E").s().p("AiSFOQg+iKABjEQgBjCA+iLQA9iLBVAAQBXAAA9CLQA8CLAADCQAADEg8CKQg9CLhXAAQhVAAg9iLg");
	this.shape_167.setTransform(1043.8,-162.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#373535").ss(0.6).p("ADPAAQAAC+g9CGQg8CHhWAAQhVAAg8iHQg9iGAAi+QAAi9A9iGQA8iHBVAAQBWAAA8CHQA9CGAAC9g");
	this.shape_168.setTransform(700.3,-167.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#342D2E").s().p("AiRFEQg9iHAAi9QAAi9A9iHQA8iGBVAAQBWAAA8CGQA9CHAAC9QAAC+g9CGQg8CHhWAAQhVAAg8iHg");
	this.shape_169.setTransform(700.3,-167.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#373535").ss(0.8).p("Ac1NPQAACugbCwIh3AAIABgNIBUAMQgUltguj9QhHl/iXkeQmTr/vjiKQnvhFmRD6QlBDJj1GKQivEZh4FeQg8CvgZB3IA7AIQgVCRAACUQAABhAJBeIh4AAQgbiuAAiwQAAmgCRl8QCMluEAkaQD/kbFLibQFXihF2AAQF4AAFWChQFMCbD/EbQD/EaCMFuQCRF8AAGgg");
	this.shape_170.setTransform(873,-290.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#342D2E").s().p("AaiStIABgNIBUAMQgTltgvj9QhHl/iXkeQmTsAviiJQnwhFmQD6QlBDJj1GKQivEYh4FfQg8CvgZB3IA6AIQgUCRAACUQAABgAJBfIh3AAQgciuAAixQAAmfCRl8QCMluEAkaQD/kcFLiaQFWihF3AAQF4AAFWChQFMCaD+EcQEAEaCMFuQCRF8AAGfQAACvgbCwg");
	this.shape_171.setTransform(873,-290.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#595959").ss(5.4).p("AhyFNQgxkMAKi9QAJimBAgRQBQgWChDX");
	this.shape_172.setTransform(904.3,-378.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#595959").ss(5.4).p("AidFPQghkNAai+QAXinBIgSQBZgWCiDX");
	this.shape_173.setTransform(879.2,-382.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#595959").ss(5.4).p("AiNE7QgnkCAUiyQARidBFgMQBVgPCiDW");
	this.shape_174.setTransform(852.8,-383.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#2A292A").ss(5.1).p("AkDmBQgNgVAAgZQAAgZAOgVQAzhQg4ikQgehYhOiTQgGgNAKgJQAKgJAMAHIB3BJIAEAEQFvFPA4BRQAgAvgEAkQgCARgcA9QhSCzBqHAQA1DgBFC9IgwgmQg7gog4gNQizgqhJDzIAEi2IgFiXQgJifgci9Qg5l5heiXg");
	this.shape_175.setTransform(1021.4,-275.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#BCBCBC").s().p("AgzLSIgFiXQgKifgci9Qg4l5heiXQgNgVAAgZQAAgZANgVQAzhQg4ikQgdhYhOiTQgHgNALgJQAKgJALAHIB3BJIAFAEQFuFPA4BRQAhAvgFAkQgCARgcA9QhSCzBqHAQA1DgBGC9IgxgmQg7gog4gNQiygqhKDzg");
	this.shape_176.setTransform(1019.9,-283.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#2A292A").ss(5.1).p("ADtltQAOgWAAgYQgBgZgNgVQgzhQA4ikQAdhXBOiVQAEgHAggjQAZgdgJAFIjJB3QluFQg4BRQghAvAFAkQACARAcA9QBSCzhqHAQg1DghGC8QBLhFBZgWQCygqBKD0IgFi3IAFiWQAKifAci9QA5l5BdiXg");
	this.shape_177.setTransform(721.7,-270.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BCBCBC").s().p("AjdLTQhZAVhLBGQBGi9A1jgQBqm/hSizQgcg9gCgRQgFglAhgvQA4hQFulQIDJh3QAJgGgZAdQggAkgEAHQhOCVgdBWQg4ClAzBPQANAVABAZQAAAZgOAVQhdCXg5F5QgcC9gKCfIgFCXIAFC2QhKjziyAqg");
	this.shape_178.setTransform(723.5,-278.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#59473D").ss(2.7).p("AhRi9QAyA3ArBLQBYCVgdBk");
	this.shape_179.setTransform(933.4,-116);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F4BB94").s().p("AhPi9QAyA3ArBLQBYCVgdBkg");
	this.shape_180.setTransform(933.2,-116);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#59473D").ss(2.7).p("ABsifIgkAbQgrAhgiAlQhvB1AQBm");
	this.shape_181.setTransform(808.7,-116.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F4BB94").s().p("AgHg8QAhglAsgiIAkgaIjQE7QgQhmBvh0g");
	this.shape_182.setTransform(808.9,-116.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#59473D").ss(3).p("AF1BbIgogfQgygkgygcQighdhjAMQiYARhFATQhmAdgSAx");
	this.shape_183.setTransform(792.8,-211);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#292929").s().p("AgzA0QgWgVAAgfQAAgeAWgVQAWgWAdABQAfgBAVAWQAWAVAAAeQAAAfgWAVQgVAVgfABQgdgBgWgVg");
	this.shape_184.setTransform(794.5,-202.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#964C35").s().p("AiDBvQgYgTAAhDQAAg/AuguQAuguA/AAQBBAAAtAuQAuAuAAA/QAABAggAUQgfAUhmACIgNAAQhUAAgZgUg");
	this.shape_185.setTransform(794.5,-203);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AEIChQiFgai6gVQi0gTg4AEQgbACgZgUQgYgTgOgdQgghGA0gnQBHg1BzgYQCWgfCQAtQAyAaA3AgQBuBAAXAcQArA2gHA0QgGAyhEAAQgXAAgggGg");
	this.shape_186.setTransform(794.5,-203);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#765949").s().p("AEMBNQidhpjxgGQh5gDhaASIBkg+QDogCCAAoQAwAOAxAaIBSAsQBGAmgrADIgJAAQgUAAgcgFg");
	this.shape_187.setTransform(796,-222.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#59473D").ss(3).p("AlyBbQA8gxBQgtQCghdBkALQCZASBDATQBnAcASAx");
	this.shape_188.setTransform(952.6,-212.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#292929").s().p("AgzA0QgWgVAAgfQAAgeAWgVQAWgWAdAAQAfAAAVAWQAWAVAAAeQAAAegWAWQgVAWgfAAQgdAAgWgWg");
	this.shape_189.setTransform(951.2,-203.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#964C35").s().p("AAKCCQhmgCgfgTQgggUAAhAQAAhAAugtQAuguA/AAQBBAAAtAuQAuAtAABAQAABDgYATQgZAUhRAAIgQgBg");
	this.shape_190.setTransform(951.2,-204.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AmIB0QgHgzArg3QAYgcBtg/IBpg6QCQgtCWAfQBzAXBHA1QA1AoghBGQgOAdgYATQgZATgagCQg5gEi0AUQi6AUiFAaQgfAHgYAAQhDAAgHgzg");
	this.shape_191.setTransform(951.2,-204.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#765949").s().p("AkpApQA2gfAcgNQAxgZAwgPQCBgoDnACIBkA/Ig8gJQhLgIhMACQjxAGidBoIg5AFQgrgDBGgmg");
	this.shape_192.setTransform(949.7,-223.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#59382D").s().p("AitCdQAshAAvhQQBdigAShSQARhSBCgEQAUgCAXAHIATAHIgiAEQglAPgOA4IgXBaIAXAuQAaA5AKA0QAfCoiHA/QAQggANgzQAYhmgWhfQgWhhgNAoQgGAUgCAnIisFbg");
	this.shape_193.setTransform(1027.5,-148);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#59473D").ss(2.7).p("AgpocQA0gVBFAAQCIACBLBsQAsBAAHCCQAHB+geCFQggCNg+BdQhGBnhbAOIg3ArQhCAyg6AlQi7B3geg8Qgeg7Azh8IA4hvIBPrBg");
	this.shape_194.setTransform(1033.7,-154.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F4BB94").s().p("AlMIeQgeg7Azh8IA4hvIBPrBICHhTQA0gVBFAAQCIACBLBsQAsBAAHCCQAHB+geCFQggCNg+BdQhGBnhbAOIg3ArQhCAyg6AlQh9BPg2AAQgcAAgKgUg");
	this.shape_195.setTransform(1033.7,-154.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#59382D").s().p("AgDgeQgBgngHgUQgMgogWBhQgWBfAYBmQAMAzAQAgQiHg/AgioQAKg0AZg5IAYguIgXhaQgPg4glgPQgTgHgPADQAdgOAhACQBCAEASBSQARBSBWCzQArBaAnBKIAGB5g");
	this.shape_196.setTransform(718.8,-149);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#59473D").ss(2.7).p("ABRoTIgjgKQgrgLgqABQiIABhLBsQgtBAgHCCQgHB+AfCFQAgCOA+BcQBGBoBbANQA+BCBGA2QCLBsAdg7QAeg8gDhxIgJhlIiNrng");
	this.shape_197.setTransform(706.3,-149);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F4BB94").s().p("ABtHiQhGg2g+hCQhbgNhGhoQg+hcggiOQgfiFAHh+QAHiCAthAQBLhsCIgBQAqgBArALIAjAKIBJAtICNLnIAJBlQADBxgeA8QgKAVgZAAQgsAAhZhGg");
	this.shape_198.setTransform(706.3,-149);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#765949").s().p("Ag9A4IgegXQgpgZgvgLQg0gMgZgVQgVgSAJgOQAfALAnAJQBNASAigHQAjgGAbAWIAUAWIAmgiQBDgTAmAAQAiAAAwgPQApgNALgOIgEAJQgMAUgSASQg5A7hkAaIgJAQQgMATgOAKQgSAMgSAAQghAAgmgng");
	this.shape_199.setTransform(872.1,-134.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#545454").s().p("AIsCtQgggvgsgsQiNiMjRgyQjPgzjfBiQhwAxhGA5QhuAPARgyQAFgPARgUIARgSQGHj5GIB3QB7AlBsBGIBUA+IARDYg");
	this.shape_200.setTransform(958.5,-238.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#545454").s().p("AovC9QguAAAShEIAchEQCvjWD0gYQBWgIBiAPQAVADB4AZQBhAVBbA3QAkAXCMBmQBSA9hFAMQgiAFgzgGQlBikicguQiDgoh8ATQhXANhgCQIhBBhQghArgXAAIAAAAg");
	this.shape_201.setTransform(790.3,-238.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#59473D").ss(3).p("A79hMQgUA7AAA+QAAA+AUA7QCSGoC0FWQEcIcEfCYQDdB4BIAnQByA9A9AVQBGAZBbAFQBEAFC6gDQFDgFGOi8QCvhTB/heQCDhgAuhRQDalwCLkIQEHn0gBiuQAAiIieoJQhqlgicnNQgghfkciHQhxg1hwgnQhugmg3gGIkwhUQi+gUiWgBQlXgCjaBOIpTDwQhWAbhAA/QhAA/gdBVg");
	this.shape_202.setTransform(867.2,-207.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F4BB94").s().p("AkHdnQhbgFhGgZQg9gVhyg9IklifQkfiYkcocQi0lWiSmoQgUg7AAg+QAAg+AUg7IGuzzQAdhVBAg/QBAg/BWgbIJTjwQDahOFXACQCWABC+AUIEwBUQA3AGBuAmQBwAnBxA1QEcCHAgBfQCcHNBqFgQCeIJAACIQABCukHH0QiLEIjaFwQguBRiDBgQh/BeivBTQmOC8lDAFIiCABQhTAAgpgDg");
	this.shape_203.setTransform(867.2,-207.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#342D2E").s().p("AhBCFIh/hAIDHjIIC6DIIg7BAg");
	this.shape_204.setTransform(861.6,3.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#373535").ss(1.2).p("AgVAkIkGEJIiOhVIi9nOICMg3IHFFRIFUjeIElhiIjKHpIi8Bgg");
	this.shape_205.setTransform(864.5,-13.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgTAkIFTjdIEmhjIjKHpIi8BhgAmnDYIi+nOICNg3IHFFRIkGEKgAgTAkg");
	this.shape_206.setTransform(864.3,-13.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#373535").ss(1.2).p("Ai/hZQAtBiBHAxQCNBjB/j2");
	this.shape_207.setTransform(861.6,19.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#342D2E").s().p("AhLA8QhHgyguhhIGBAAQhbCvhiAAQgnAAgogcg");
	this.shape_208.setTransform(861.6,19.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#373535").ss(1.2).p("AhemlIhhFTIDGHqIC6n0IhelJ");
	this.shape_209.setTransform(861.6,65.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#342D2E").s().p("AjAhLIBhlTIDCAAIBeFJIi6H0g");
	this.shape_210.setTransform(861.6,65.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#373535").ss(4).p("ApTsfIiwBxQiwB6gEAxQgEAxBxC2IByCsID3gYIAABJIhUFQIEhIZII2AAIEhoZIhgmZIDSAlID+mOIhuh0QiAh8hegmIppWOg");
	this.shape_211.setTransform(862.6,42.6,1,1,0,0,0,0,0.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#525251").s().p("AkRMlIkhoZIBUlQIAAhJIj3AYIhyisQhxi2AEgxQAEgxCwh6ICwhxIJQWmIJq2OQBeAmCAB8IBuB0Ij+GOIjSglIBgGZIkhIZg");
	this.shape_212.setTransform(862.3,42.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("Ah/FwQgDgQicl9IjQn+IH7AAIFbggICHAAIgzB4IhuGwIijE7IiuEUQh3izgFgZg");
	this.shape_213.setTransform(865.1,57.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#373535").ss(4).p("AuvqXIolEVIgsBtQg1CJgpCGQiFGrAeDxMA2PAAAQgNjJgjjlQhFnLhqiTIowkP");
	this.shape_214.setTransform(861.8,56.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#525251").s().p("A7EKXQgfjxCFmrQAqiGA0iJIAthtIIkkVIdqASIIxEPQBpCTBGHLQAiDmAODIg");
	this.shape_215.setTransform(861.7,56.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#373535").ss(0.8).p("AM7k+IiZBTQi+Bki2BRQpEECkXgaQkXgaAKAhQAFARA8AWQA/AdBTAZQClAzBngOQBhgNCdglQDag1CzhEQIPjIgEkGg");
	this.shape_216.setTransform(534.8,-108.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#342D2E").s().p("ApnEXQhTgag/gcQg8gWgFgRQgKgiEXAaQEXAbJEkCQC2hRC+hkICZhUQAEEGoPDIQizBFjaA0QidAmhhANQgWADgZAAQhbAAiCgog");
	this.shape_217.setTransform(534.8,-108.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#373535").ss(0.6).p("ADRAAQAADEg9CKQg9CLhXAAQhVAAg9iLQg9iKAAjEQAAjDA9iKQA9iLBVAAQBXAAA9CLQA9CKAADDg");
	this.shape_218.setTransform(617.1,-179);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#342D2E").s().p("AiTFOQg9iKAAjEQAAjDA9iKQA9iLBWAAQBXAAA8CLQA9CKAADDQAADEg9CKQg8CLhXAAQhWAAg9iLg");
	this.shape_219.setTransform(617.1,-179);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#373535").ss(0.6).p("ADPAAQAAC+g9CHQg8CGhWAAQhVAAg9iGQg8iHAAi+QAAi9A8iGQA9iHBVAAQBWAAA8CHQA9CGAAC9g");
	this.shape_220.setTransform(268.9,-165.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#342D2E").s().p("AiSFEQg8iGAAi+QAAi9A8iGQA9iHBVABQBWgBA8CHQA9CGAAC9QAAC+g9CGQg8CGhWAAQhVAAg9iGg");
	this.shape_221.setTransform(268.9,-165.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#373535").ss(0.8).p("Ac1L8QAACfgbCeIh3AAIAAgMIBUALQgTlKgvjkQhGlaiXkCQmTq1vjh8Qnvg+mRDiQlAC1j2FkQivD9h4E8Qg8CegZBsIA7AHQgVCCAACGQAABVAJBYIh4AAQgbifAAieQAAl3CRlXQCMlKEAj/QD/kAFLiMQFWiRF3AAQF4AAFWCRQFLCMD/EAQEAD/CMFKQCRFXAAF3g");
	this.shape_222.setTransform(446.2,-294.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#342D2E").s().p("AaiQ5IABgMIBUALQgTlKgvjkQhGlaiYkCQmTq1vih8Qnwg+mQDiQlBC1j1FkQivD9h4E8Qg8CegZBsIA6AHQgUCCAACGQAABVAJBYIh4AAQgbifAAieQAAl3CRlXQCMlKEAj/QD+kAFMiMQFWiRF3AAQF4AAFWCRQFLCMD/EAQEAD/CMFKQCRFXAAF3QAACfgcCeg");
	this.shape_223.setTransform(446.2,-294.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E5343E").s().p("AhACEIiAg/IDHjJIC5DJIg6A/g");
	this.shape_224.setTransform(430.6,3.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#2A292A").ss(5.1).p("AiPgiQAegbAzAAQBngBBtCG");
	this.shape_225.setTransform(547.2,-336.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#545454").s().p("AiSgnQAegbA0AAQBmAABtCFg");
	this.shape_226.setTransform(547.5,-336.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#2A292A").ss(5.1).p("AjEBxQAqh6Cug2QA2gQBBgJQA2gGADgB");
	this.shape_227.setTransform(312.5,-316.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#545454").s().p("AAUhHQA2gRBBgJIA6gGImJDPQAqh6Cug1g");
	this.shape_228.setTransform(312.5,-315.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#2A292A").ss(5.1).p("AczMWQgxhIiVBAQhLAghBAvQg5j/ggj/QgSiKgTjtQgQi7gOhKQgWhugvg6QiECNnBAFQjgADjGgaQm1imnZAWQjtAMiVAsIiPCJQiABVhKG4QglDdgMDLIgECXIAFC2QhMjziyAqQhZAWhKBGQBFi9A0jgQBpnBhSiyQgXgyAJgyQAKg4A2hMQBpiUF0lVQCzikF0hJQE9g+GlAKQFqAJFbA5QE/A1CLBAQDYBjAtDdQAXBvgVBaQDpA3APD6QAIB9gnBwIA9GKQA0F8gwhIg");
	this.shape_229.setTransform(434.2,-284);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#545454").s().p("A6UNwQhZAVhKBGQBFi8A0jhQBpnBhSixQgXgyAJgyQAKg4A2hMQBpiUF0lWQCzikF0hIQE9g+GlAKQFqAJFbA5QE/A1CLA/QDYBkAtDdQAXBugVBbQDpA3APD5QAIB8gnByIA9GKQA0F7gwhHQgxhIiVBAQhLAghBAuQg5j/ggj/QgSiJgTjuQgQi7gOhKQgWhtgvg6QiECMnBAGQjgACjGgZQm1imnZAWQjtALiVAsIiPCJQiABWhKG4QglDcgMDMIgECWIAFC3QhMj0iyArg");
	this.shape_230.setTransform(436,-292);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#59473D").ss(2.7).p("AhRi9QAyA3ArBLQBYCVgdBk");
	this.shape_231.setTransform(500.4,-112.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F4BB94").s().p("AhPi9QAyA3ArBLQBYCVgdBkg");
	this.shape_232.setTransform(500.2,-112.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#59473D").ss(2.7).p("ABsifIgkAbQgrAigiAkQhvB1AQBm");
	this.shape_233.setTransform(375.7,-112.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#F4BB94").s().p("AgHg8QAiglArgiIAkgaIjQE7QgQhmBvh0g");
	this.shape_234.setTransform(375.9,-113);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#59473D").ss(3).p("AF1BbIgogfQgygkgygcQighdhjAMQiZARhEATQhmAcgSAx");
	this.shape_235.setTransform(359.8,-207.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#292929").s().p("AgzA0QgWgVAAgfQAAgdAWgWQAVgWAeAAQAfAAAVAWQAWAWAAAdQAAAfgWAVQgWAWgeAAQgeAAgVgWg");
	this.shape_236.setTransform(361.5,-198.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#964C35").s().p("AiDBvQgYgTAAhDQAAhAAugtQAuguA/AAQBAAAAuAuQAuAtAABAQAABAggAUQgfAUhmACIgMAAQhVAAgZgUg");
	this.shape_237.setTransform(361.5,-199.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AEIChQiFgbi6gUQi0gUg4AFQgbACgZgUQgYgTgOgdQgghGA0goQBHg1BzgXQCWgfCQAtQAyAaA3AgQBuA/AXAdQArA2gHA0QgGAyhEAAQgYAAgfgGg");
	this.shape_238.setTransform(361.5,-199.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#765949").s().p("AEMBNQidhpjxgGQh5gDhaASIBkg+QDogCCAAoQAwAOAxAaIBSAsQBGAmgrACIgJABQgUAAgcgFg");
	this.shape_239.setTransform(363,-218.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#59473D").ss(3).p("AlyBbQA8gxBQguQCghdBkAMQCYARBEATQBmAdATAx");
	this.shape_240.setTransform(519.6,-208.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#292929").s().p("AgzA0QgWgVAAgfQAAgdAWgWQAWgWAdAAQAfAAAVAWQAWAWAAAdQAAAfgWAVQgVAVgfAAQgdAAgWgVg");
	this.shape_241.setTransform(518.2,-199.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#964C35").s().p("AAKCDQhmgCgfgUQgggUAAhAQAAg/AuguQAuguA/AAQBBAAAtAuQAuAuAAA/QAABDgYATQgZAUhVAAIgMAAg");
	this.shape_242.setTransform(518.2,-200.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AmIB1QgHg0Arg2QAYgcBthAIBpg6QCQgtCWAfQB0AYBGA1QA1AnghBGQgOAdgYATQgZAUgbgCQg4gEi0ATQi6AViFAaQggAGgXAAQhEAAgGgyg");
	this.shape_243.setTransform(518.2,-200.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#765949").s().p("AkpApQA2gfAcgNQAxgaAwgOQCAgoDoACIBkA+Ig8gIQhLgJhMACQjxAGidBpIg5AFQgrgDBGgmg");
	this.shape_244.setTransform(516.7,-220);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#59382D").s().p("AitCdQAshAAvhQQBdigAShSQARhSBCgEQAUgCAXAHIATAHIgiAEQglAPgOA4IgXBaIAXAuQAaA5AKA0QAfCoiHA/QAQggANgzQAYhmgWhfQgWhhgNAoQgGAUgCAnIisFbg");
	this.shape_245.setTransform(594.5,-144.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#59473D").ss(2.7).p("AgpocQA0gVBFAAQCIABBLBtQAsBAAHCCQAHB+geCEQggCOg+BdQhGBnhbAOIg4ArQhCAyg6AlQi6B3geg8Qgeg7Azh8QAQgmAVgoIATghIBPrBg");
	this.shape_246.setTransform(600.7,-151);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F4BB94").s().p("AlMIeQgeg7Azh8QAQgmAVgoIATghIBPrBICHhTQA0gVBFAAQCIABBLBtQAsBAAHCCQAHB+geCEQggCOg+BdQhGBnhbAOIg4ArQhCAyg6AlQh8BPg2AAQgcAAgKgUg");
	this.shape_247.setTransform(600.7,-151);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#59382D").s().p("AgDgeQgBgngHgUQgMgogWBhQgWBfAYBmQAMAzAQAgQiHg/AgioQAKg0AZg5IAYguIgXhaQgPg4glgPQgTgHgPADQAdgOAhACQBCAEASBSQARBSBWCzQArBaAnBKIAGB5g");
	this.shape_248.setTransform(285.8,-145.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#59473D").ss(2.7).p("ABRoTIgjgKQgrgLgqABQiIABhLBtQgtBAgHCCQgHB+AeCEQAhCOA9BcQBGBoBbANQA/BCBFA3QCMBsAdg8QAeg7gDhxIgJhlIiNrog");
	this.shape_249.setTransform(273.3,-145.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#F4BB94").s().p("ABsHjQhFg3g/hCQhbgNhGhoQg9hcghiOQgeiEAHh+QAHiCAthAQBLhtCIgBQAqgBArALIAjAKIBJAtICNLoIAJBlQADBxgeA7QgKAVgZAAQgsAAhahFg");
	this.shape_250.setTransform(273.3,-145.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#765949").s().p("AhWA4IgrgXQg4gZhCgLQhJgMgigVQgdgSALgOQAsALA2AJQBsASAwgGQAxgHAlAWIAcAWIA1giQBegTA2AAQAwAABBgPQA7gNAPgOIgGAJQgRAUgZASQhQA7iLAaIgNAQQgQATgVAKQgXAMgaAAQguAAg2gng");
	this.shape_251.setTransform(437.8,-125.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#545454").s().p("AIiDNQghgngsgmQiNh5jMhBQjLhCjaAyQhtAYhFAmQhvAHAVgxQAGgQATgTIASgQQGZjaF+CVQB3AvBnBOIBOBDIAADag");
	this.shape_252.setTransform(528.3,-242.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#545454").s().p("ApFClIARhHQCMjvDug9QBTgVBlgBQATAAB6AHQBkAFBiApQAoARCaBQQBaAwhCAWQghAKgzABQkzhki8AYQhBAJhIAaIhxApQhTAahRBkQgvA7gHAHQgcAegXADIgIABQglAAAHhAg");
	this.shape_253.setTransform(346,-242.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#59473D").ss(3).p("A8bAHIBGDOQBaD8BoDhQFNLPFVC0QDdB4BIAnQByA9A8AWQBGAYBbAGQBEAEC5gDQFEgFGOi8QCvhSCAheQCDhgAuhSQDZlwCMkIQEHnzgBivQgBisj5sMQhOj0hdkUIhOjiI5sitIvFEwg");
	this.shape_254.setTransform(433.7,-200.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F4BB94").s().p("Aj9dFQhbgGhGgYQg8gWhyg9IkmifQlVi0lMrPQhojhhaj8IhHjOIIU4dIPFkwIZtCtIBNDiQBeEUBND0QD6MMAACsQABCvkHHzQiLEIjaFwQguBSiCBgQiBBeiuBSQmOC8lEAFIh9ABQhWAAgqgCg");
	this.shape_255.setTransform(433.8,-200.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#373535").ss(1.2).p("AgVAkIkGEJIiNhVIi+nOICMg3IHFFRIFUjeIEmhiIjLHpIi8Bgg");
	this.shape_256.setTransform(433.5,-13.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgUAlIFUjfIEmhiIjLHpIi8BggAmnDYIi+nOICMg3IHFFSIkGEIgAgUAlg");
	this.shape_257.setTransform(433.4,-13.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#373535").ss(1.2).p("Ai/hZQAtBiBHAxQCNBjB/j2");
	this.shape_258.setTransform(430.6,19.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E5343E").s().p("AhLA8QhHgyguhhIGAAAQhaCvhiAAQgnAAgogcg");
	this.shape_259.setTransform(430.6,19.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#373535").ss(1.2).p("AhemlIhhFUIDGHpIC6n0IhelJ");
	this.shape_260.setTransform(430.6,65.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E5343E").s().p("AjAhKIBhlUIDCAAIBdFJIi5H0g");
	this.shape_261.setTransform(430.6,65);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333332").s().p("AkRMlIkhoZIBUlQIAAhJIj3AZIhyitQhxi2AEgxQAEgxCwh6ICwhxIJQWmIJq2OQBeAmCAB8IBuB0Ij9GOIjTglIBgGZIkhIZg");
	this.shape_262.setTransform(431.3,42.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("Ah/FwQgDgQicl8IjQoAIH7AAIFbgfICHAAIgzB4IhuGwIijE7IiuEUQh3izgFgZg");
	this.shape_263.setTransform(434.1,57.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333332").s().p("A7EKXQgfjxCFmrQAqiGA0iJIAthtIIkkVIdqASIIxEPQBpCTBGHLQAiDlAODJg");
	this.shape_264.setTransform(430.7,56.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#292929").s().p("AhfCGQggAAgZgWQg3gygbg8QgRgjASglQATgkAogHQCPgcBkALQCUAQAYBiQAIAegQAcQgQAcgfALIiTAxQgNAEgOAAg");
	this.shape_265.setTransform(868.8,-60.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#292929").s().p("AgsA+QgPAAgLgKQgagYgMgbQgIgQAIgRQAJgRATgEQBCgMAuAFQBFAHALAuQAEANgIANQgHANgOAFIhFAXQgGACgGAAg");
	this.shape_266.setTransform(869.6,-67.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#A03335").s().p("Ag+gcQBThIBoBaIj6BHQAVg2Aqgjg");
	this.shape_267.setTransform(882.2,-58.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#A03335").s().p("Ah9AkID6hHQgHApgTAeg");
	this.shape_268.setTransform(882.2,-56.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FDFEFE").s().p("AgEApQhAgCg1gVQg4gWgXgkIGRAAQg0BRiKAAIgPAAg");
	this.shape_269.setTransform(872,-48.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FDFEFE").s().p("AjNgPQANgGAdgGQA7gMBOgBQA3gBAhAFQAPACAqAMQAnAKAcAbIAUAag");
	this.shape_270.setTransform(872.5,-69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},278).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}},{t:this.shape_265,p:{x:868.8}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}},{t:this.shape_265,p:{x:868.8}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}},{t:this.shape_265,p:{x:868.8}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}},{t:this.shape_265,p:{x:868.8}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}},{t:this.shape_265,p:{x:868.8}}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},7).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},3).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},3).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}},{t:this.shape_265,p:{x:868.8}}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},2).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},2).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},3).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},2).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},4).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266},{t:this.shape_265,p:{x:870.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},5).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_135,p:{x:437.9,y:-74.6}},{t:this.shape_266}]},6).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:874.9,y:-65}}]},4).to({state:[]},4).to({state:[]},61).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,-422.1,1208.6,836.8);


(lib.Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Flash, new cjs.Rectangle(0,-95,169,190), null);


(lib.crowdcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(444,-37,0.084,0.084);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(349,15,0.084,0.084);

	this.instance_2 = new lib.Path_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(303,-37,0.084,0.084);

	this.instance_3 = new lib.Path_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(251,9,0.084,0.084);

	this.instance_4 = new lib.Path_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(159,-30,0.084,0.084);

	this.instance_5 = new lib.Path_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(63,19,0.084,0.084);

	this.instance_6 = new lib.Path_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(7,-28,0.084,0.084);

	this.instance_7 = new lib.Path_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(69,-33,0.084,0.084);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:7,y:-28}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:63,y:19}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:159,y:-30}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:251,y:9}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:303,y:-37}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:349,y:15}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:444,y:-37}}]}).to({state:[{t:this.instance_6,p:{scaleX:0.124,scaleY:0.124,x:5,y:-30}},{t:this.instance_5,p:{scaleX:0.124,scaleY:0.124,x:60,y:16}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.124,x:156,y:-34}},{t:this.instance_3,p:{scaleX:0.124,scaleY:0.124,x:255,y:11}},{t:this.instance_2,p:{scaleX:0.124,scaleY:0.124,x:299,y:-40}},{t:this.instance_1,p:{scaleX:0.124,scaleY:0.124,x:345,y:11}},{t:this.instance,p:{scaleX:0.124,scaleY:0.124,x:439,y:-41}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:7,y:-26}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:63,y:19}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:159,y:-30}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:251,y:9}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:303,y:-37}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:349,y:15}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:444,y:-37}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.084,scaleY:0.084,x:69,y:-33}},{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:9,y:24}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:159,y:15}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:226,y:-21}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:289,y:8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:330,y:-23}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:496,y:-35}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:435,y:10}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.124,scaleY:0.124,x:66,y:-38}},{t:this.instance_6,p:{scaleX:0.124,scaleY:0.124,x:5,y:20}},{t:this.instance_5,p:{scaleX:0.124,scaleY:0.124,x:156,y:11}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.124,x:222,y:-25}},{t:this.instance_3,p:{scaleX:0.124,scaleY:0.124,x:286,y:3}},{t:this.instance_2,p:{scaleX:0.124,scaleY:0.124,x:327,y:-25}},{t:this.instance_1,p:{scaleX:0.124,scaleY:0.124,x:492,y:-40}},{t:this.instance,p:{scaleX:0.124,scaleY:0.124,x:433,y:5}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.084,scaleY:0.084,x:69,y:-33}},{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:9,y:24}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:159,y:15}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:226,y:-21}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:289,y:8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:330,y:-23}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:496,y:-35}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:435,y:10}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:7,y:-26}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:63,y:19}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:159,y:-30}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:251,y:9}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:303,y:-37}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:349,y:15}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:444,y:-37}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.124,scaleY:0.124,x:5,y:-30}},{t:this.instance_5,p:{scaleX:0.124,scaleY:0.124,x:60,y:16}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.124,x:156,y:-34}},{t:this.instance_3,p:{scaleX:0.124,scaleY:0.124,x:255,y:11}},{t:this.instance_2,p:{scaleX:0.124,scaleY:0.124,x:299,y:-40}},{t:this.instance_1,p:{scaleX:0.124,scaleY:0.124,x:345,y:11}},{t:this.instance,p:{scaleX:0.124,scaleY:0.124,x:439,y:-41}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:7,y:-26}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:63,y:19}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:159,y:-30}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:251,y:9}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:303,y:-37}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:349,y:15}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:444,y:-37}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.084,scaleY:0.084,x:69,y:-33}},{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:9,y:24}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:159,y:15}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:226,y:-21}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:289,y:8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:330,y:-23}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:496,y:-35}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:435,y:10}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.124,scaleY:0.124,x:66,y:-38}},{t:this.instance_6,p:{scaleX:0.124,scaleY:0.124,x:5,y:20}},{t:this.instance_5,p:{scaleX:0.124,scaleY:0.124,x:156,y:11}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.124,x:222,y:-25}},{t:this.instance_3,p:{scaleX:0.124,scaleY:0.124,x:286,y:3}},{t:this.instance_2,p:{scaleX:0.124,scaleY:0.124,x:327,y:-25}},{t:this.instance_1,p:{scaleX:0.124,scaleY:0.124,x:492,y:-40}},{t:this.instance,p:{scaleX:0.124,scaleY:0.124,x:433,y:5}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.084,scaleY:0.084,x:69,y:-33}},{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:9,y:24}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:159,y:15}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:226,y:-21}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:289,y:8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:330,y:-23}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:496,y:-35}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:435,y:10}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:7,y:-26}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:63,y:19}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:159,y:-30}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:251,y:9}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:303,y:-37}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:349,y:15}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:444,y:-37}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.124,scaleY:0.124,x:5,y:-30}},{t:this.instance_5,p:{scaleX:0.124,scaleY:0.124,x:60,y:16}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.124,x:156,y:-34}},{t:this.instance_3,p:{scaleX:0.124,scaleY:0.124,x:255,y:11}},{t:this.instance_2,p:{scaleX:0.124,scaleY:0.124,x:299,y:-40}},{t:this.instance_1,p:{scaleX:0.124,scaleY:0.124,x:345,y:11}},{t:this.instance,p:{scaleX:0.124,scaleY:0.124,x:439,y:-41}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:7,y:-26}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:63,y:19}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:159,y:-30}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:251,y:9}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:303,y:-37}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:349,y:15}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:444,y:-37}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.084,scaleY:0.084,x:69,y:-33}},{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:9,y:24}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:159,y:15}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:226,y:-21}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:289,y:8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:330,y:-23}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:496,y:-35}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:435,y:10}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.124,scaleY:0.124,x:66,y:-38}},{t:this.instance_6,p:{scaleX:0.124,scaleY:0.124,x:5,y:20}},{t:this.instance_5,p:{scaleX:0.124,scaleY:0.124,x:156,y:11}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.124,x:222,y:-25}},{t:this.instance_3,p:{scaleX:0.124,scaleY:0.124,x:286,y:3}},{t:this.instance_2,p:{scaleX:0.124,scaleY:0.124,x:327,y:-25}},{t:this.instance_1,p:{scaleX:0.124,scaleY:0.124,x:492,y:-40}},{t:this.instance,p:{scaleX:0.124,scaleY:0.124,x:433,y:5}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.084,scaleY:0.084,x:69,y:-33}},{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:9,y:24}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:159,y:15}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:226,y:-21}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:289,y:8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:330,y:-23}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:496,y:-35}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:435,y:10}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:7,y:-26}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:63,y:19}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:159,y:-30}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:251,y:9}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:303,y:-37}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:349,y:15}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:444,y:-37}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.124,scaleY:0.124,x:5,y:-30}},{t:this.instance_5,p:{scaleX:0.124,scaleY:0.124,x:60,y:16}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.124,x:156,y:-34}},{t:this.instance_3,p:{scaleX:0.124,scaleY:0.124,x:255,y:11}},{t:this.instance_2,p:{scaleX:0.124,scaleY:0.124,x:299,y:-40}},{t:this.instance_1,p:{scaleX:0.124,scaleY:0.124,x:345,y:11}},{t:this.instance,p:{scaleX:0.124,scaleY:0.124,x:439,y:-41}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:7,y:-26}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:63,y:19}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:159,y:-30}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:251,y:9}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:303,y:-37}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:349,y:15}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:444,y:-37}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.084,scaleY:0.084,x:69,y:-33}},{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:9,y:24}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:159,y:15}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:226,y:-21}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:289,y:8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:330,y:-23}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:496,y:-35}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:435,y:10}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.124,scaleY:0.124,x:66,y:-38}},{t:this.instance_6,p:{scaleX:0.124,scaleY:0.124,x:5,y:20}},{t:this.instance_5,p:{scaleX:0.124,scaleY:0.124,x:156,y:11}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.124,x:222,y:-25}},{t:this.instance_3,p:{scaleX:0.124,scaleY:0.124,x:286,y:3}},{t:this.instance_2,p:{scaleX:0.124,scaleY:0.124,x:327,y:-25}},{t:this.instance_1,p:{scaleX:0.124,scaleY:0.124,x:492,y:-40}},{t:this.instance,p:{scaleX:0.124,scaleY:0.124,x:433,y:5}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.084,scaleY:0.084,x:69,y:-33}},{t:this.instance_6,p:{scaleX:0.084,scaleY:0.084,x:9,y:24}},{t:this.instance_5,p:{scaleX:0.084,scaleY:0.084,x:159,y:15}},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.084,x:226,y:-21}},{t:this.instance_3,p:{scaleX:0.084,scaleY:0.084,x:289,y:8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.084,x:330,y:-23}},{t:this.instance_1,p:{scaleX:0.084,scaleY:0.084,x:496,y:-35}},{t:this.instance,p:{scaleX:0.084,scaleY:0.084,x:435,y:10}}]},4).to({state:[]},5).wait(9));

	// crowd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4558A4").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape.setTransform(24.6,-9.7,0.283,0.283);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_1.setTransform(24.7,-17.7,0.283,0.283);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_2.setTransform(26.3,-14.9,0.283,0.283);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#39489A").s().p("Ah1BlQgygpAAg8QAAg6AygqQAxgqBEAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhEAAgxgqg");
	this.shape_3.setTransform(26.3,-22.9,0.283,0.283);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_4.setTransform(25.3,32.6,0.283,0.283);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#39489A").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_5.setTransform(25.3,24.5,0.283,0.283);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#35A353").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_6.setTransform(26.9,27.3,0.283,0.283);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#35A353").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_7.setTransform(26.9,19.3,0.283,0.283);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_8.setTransform(35.4,-7.4,0.283,0.283);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#39489A").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAygqBEAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhEAAgygqg");
	this.shape_9.setTransform(35.4,-15.4,0.283,0.283);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_10.setTransform(37.1,-13.6,0.283,0.283);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_11.setTransform(37.1,-21.6,0.283,0.283);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_12.setTransform(36,31.4,0.283,0.283);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_13.setTransform(36,23.3,0.283,0.283);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3D7B").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_14.setTransform(4.6,-9.9,0.283,0.283);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_15.setTransform(4.6,-17.9,0.283,0.283);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F683F").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_16.setTransform(4.6,-15.4,0.283,0.283);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3F683F").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_17.setTransform(4.6,-23.5,0.283,0.283);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_18.setTransform(5.3,32.3,0.283,0.283);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_19.setTransform(5.3,24.3,0.283,0.283);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3C3D7B").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_20.setTransform(5.3,26.8,0.283,0.283);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_21.setTransform(5.3,18.8,0.283,0.283);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8080BC").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_22.setTransform(14.7,-9.3,0.284,0.284);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_23.setTransform(14.7,-17.4,0.284,0.284);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3C3D7B").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_24.setTransform(273.2,-9.4,0.283,0.283);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C3D7B").s().p("Ah2BlQgwgpgBg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_25.setTransform(273.2,-17.4,0.283,0.283);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QABg5ApgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_26.setTransform(272.8,28.5,0.283,0.283);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8080BC").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAygqBEAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhEAAgygqg");
	this.shape_27.setTransform(272.8,20.4,0.283,0.283);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_28.setTransform(272.8,19.3,0.283,0.283);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D77698").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBGAAAwAqQAxAqAAA6QAAA7gxAqQgwAqhGAAQhFAAgwgqg");
	this.shape_29.setTransform(272.8,11.3,0.283,0.283);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8080BC").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_30.setTransform(273.9,-18.3,0.283,0.283);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8080BC").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_31.setTransform(273.9,-26.3,0.283,0.283);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3C3D7B").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_32.setTransform(83,30.5,0.283,0.283);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3C3D7B").s().p("Ah1BlQgygqABg7QgBg6AygqQAwgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgwgqg");
	this.shape_33.setTransform(83,22.5,0.283,0.283);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#39489A").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_34.setTransform(83,21.4,0.283,0.283);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#39489A").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhFAAgxgqg");
	this.shape_35.setTransform(83,13.3,0.283,0.283);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_36.setTransform(92.5,-8.8,0.283,0.283);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_37.setTransform(92.5,-16.8,0.283,0.283);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_38.setTransform(93.2,-14.9,0.283,0.283);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D77698").s().p("Ah1BlQgxgpgBg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_39.setTransform(93.2,-22.9,0.283,0.283);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_40.setTransform(75,27.9,0.283,0.283);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#303050").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_41.setTransform(75,19.8,0.283,0.283);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_42.setTransform(75,21.3,0.283,0.283);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgwgqg");
	this.shape_43.setTransform(75,13.3,0.283,0.283);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_44.setTransform(83,-9,0.283,0.283);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4558A4").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_45.setTransform(83,-17,0.283,0.283);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_46.setTransform(84.5,-16.3,0.283,0.283);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_47.setTransform(84.5,-24.3,0.283,0.283);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_48.setTransform(68.7,29.9,0.283,0.283);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_49.setTransform(68.7,21.9,0.283,0.283);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_50.setTransform(68.7,21,0.283,0.283);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_51.setTransform(68.7,13,0.283,0.283);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_52.setTransform(75,-8.3,0.283,0.283);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D77698").s().p("Ah1BlQgygqAAg7QAAg6AygqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_53.setTransform(75,-16.4,0.283,0.283);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApgBA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_54.setTransform(74.9,-15.6,0.283,0.283);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#303050").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_55.setTransform(74.9,-23.6,0.283,0.283);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_56.setTransform(61.5,28.6,0.283,0.283);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#39489A").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBGAAAxAqQAwAqABA6QgBA7gwAqQgxAqhGAAQhFAAgwgqg");
	this.shape_57.setTransform(61.5,20.6,0.283,0.283);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_58.setTransform(61.5,19.9,0.283,0.283);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4CACE0").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAxgqBFAAQBFAAAyAqQAwAqABA6QgBA7gwAqQgyAqhFAAQhFAAgxgqg");
	this.shape_59.setTransform(61.5,11.9,0.283,0.283);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8080BC").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_60.setTransform(65.5,-15.6,0.283,0.283);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8080BC").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_61.setTransform(65.5,-23.6,0.283,0.283);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_62.setTransform(65.5,-8.9,0.283,0.283);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_63.setTransform(65.5,-16.9,0.283,0.283);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_64.setTransform(54.8,27,0.283,0.283);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_65.setTransform(54.8,18.9,0.283,0.283);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_66.setTransform(53.4,19.9,0.283,0.283);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D77698").s().p("Ah1BlQgxgqgBg7QABg6AxgqQAwgqBFAAQBFAAAxAqQAyAqAAA6QAAA7gyAqQgxAqhFAAQhFAAgwgqg");
	this.shape_67.setTransform(53.4,11.9,0.283,0.283);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_68.setTransform(56.7,-7.4,0.283,0.283);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAyAqgBA6QABA8gyApQgxAqhFAAQhFAAgwgqg");
	this.shape_69.setTransform(56.7,-15.4,0.283,0.283);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_70.setTransform(137.6,29,0.283,0.283);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_71.setTransform(137.6,21,0.283,0.283);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_72.setTransform(137.6,19.9,0.283,0.283);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_73.setTransform(137.6,11.9,0.283,0.283);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_74.setTransform(140,-17.7,0.283,0.283);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4CACE0").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_75.setTransform(140,-25.7,0.283,0.283);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_76.setTransform(140,-9.7,0.283,0.283);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D77698").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhFAAgxgqg");
	this.shape_77.setTransform(140,-17.7,0.283,0.283);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_78.setTransform(128.4,28.1,0.283,0.283);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_79.setTransform(128.4,20.1,0.283,0.283);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_80.setTransform(128.4,21.5,0.283,0.283);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_81.setTransform(128.4,13.5,0.283,0.283);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_82.setTransform(132.1,-9,0.283,0.283);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_83.setTransform(132.1,-17,0.283,0.283);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_84.setTransform(132.8,-17.7,0.283,0.283);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#39489A").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgwgqg");
	this.shape_85.setTransform(132.8,-25.7,0.283,0.283);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_86.setTransform(123.3,28.4,0.283,0.283);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_87.setTransform(123.3,20.4,0.283,0.283);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_88.setTransform(123.3,19.6,0.283,0.283);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_89.setTransform(123.3,11.5,0.283,0.283);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_90.setTransform(124.1,-10.3,0.283,0.283);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_91.setTransform(124.1,-18.3,0.283,0.283);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_92.setTransform(124.1,-16.4,0.283,0.283);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_93.setTransform(124.1,-24.4,0.283,0.283);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_94.setTransform(116.1,27.2,0.283,0.283);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_95.setTransform(116.1,19.1,0.283,0.283);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_96.setTransform(116.1,18.4,0.283,0.283);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_97.setTransform(116.1,10.4,0.283,0.283);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_98.setTransform(116.2,-9.6,0.283,0.283);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_99.setTransform(116.2,-17.6,0.283,0.283);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_100.setTransform(116.2,-17,0.283,0.283);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_101.setTransform(116.2,-25,0.283,0.283);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_102.setTransform(109.4,25.5,0.283,0.283);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4CACE0").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_103.setTransform(109.4,17.5,0.283,0.283);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_104.setTransform(108.1,18.4,0.283,0.283);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_105.setTransform(108.1,10.4,0.283,0.283);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4558A4").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_106.setTransform(108.9,-9.7,0.283,0.283);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_107.setTransform(108.9,-17.7,0.283,0.283);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_108.setTransform(108.2,-17.7,0.283,0.283);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_109.setTransform(108.2,-25.7,0.283,0.283);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_110.setTransform(184.3,27.7,0.283,0.283);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_111.setTransform(184.3,19.7,0.283,0.283);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_112.setTransform(184.3,18.6,0.283,0.283);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4CACE0").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_113.setTransform(184.3,10.5,0.283,0.283);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_114.setTransform(186,-10.3,0.283,0.283);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_115.setTransform(186,-18.3,0.283,0.283);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_116.setTransform(186,-18.3,0.283,0.283);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_117.setTransform(186,-26.3,0.283,0.283);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_118.setTransform(176.3,25,0.283,0.283);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#303050").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBGAAAwAqQAyAqgBA6QABA7gyAqQgwAqhGAAQhFAAgxgqg");
	this.shape_119.setTransform(176.3,17,0.283,0.283);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_120.setTransform(176.3,18.5,0.283,0.283);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#39489A").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgwAqhGAAQhFAAgxgqg");
	this.shape_121.setTransform(176.3,10.4,0.283,0.283);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_122.setTransform(178.3,-10.8,0.283,0.283);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_123.setTransform(178.3,-18.9,0.283,0.283);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_124.setTransform(179,-18.9,0.283,0.283);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_125.setTransform(179,-26.9,0.283,0.283);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApgBA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_126.setTransform(170,27.1,0.283,0.283);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4CACE0").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAygqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgygqg");
	this.shape_127.setTransform(170,19,0.283,0.283);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_128.setTransform(170,18.2,0.283,0.283);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D77698").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_129.setTransform(170,10.2,0.283,0.283);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_130.setTransform(171.2,-17.6,0.283,0.283);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_131.setTransform(171.2,-25.6,0.283,0.283);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_132.setTransform(171.2,-10.8,0.283,0.283);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_133.setTransform(171.2,-18.8,0.283,0.283);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3C3D7B").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApgBA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_134.setTransform(162.8,25.8,0.283,0.283);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqgBg7QAAg6AygqQAwgqBFAAQBGAAAwAqQAxAqAAA6QAAA7gxAqQgwAqhGAAQhFAAgwgqg");
	this.shape_135.setTransform(162.8,17.8,0.283,0.283);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_136.setTransform(162.8,17.1,0.283,0.283);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_137.setTransform(162.8,9.1,0.283,0.283);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_138.setTransform(164.7,-11.5,0.283,0.283);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_139.setTransform(164.8,-19.6,0.283,0.283);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_140.setTransform(164.7,-17.7,0.283,0.283);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_141.setTransform(164.8,-25.7,0.283,0.283);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3C3D7B").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_142.setTransform(156.1,24.1,0.283,0.283);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_143.setTransform(156.1,16.1,0.283,0.283);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_144.setTransform(154.7,17.1,0.283,0.283);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D77698").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgxgqg");
	this.shape_145.setTransform(154.7,9.1,0.283,0.283);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_146.setTransform(156,-10.8,0.283,0.283);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_147.setTransform(156,-18.8,0.283,0.283);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_148.setTransform(156,-18.3,0.283,0.283);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_149.setTransform(156,-26.4,0.283,0.283);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_150.setTransform(226.6,25.7,0.283,0.283);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_151.setTransform(226.6,17.7,0.283,0.283);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#39489A").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_152.setTransform(226.6,16.6,0.283,0.283);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_153.setTransform(226.6,8.6,0.283,0.283);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_154.setTransform(231.3,-9.7,0.283,0.283);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_155.setTransform(231.3,-17.7,0.283,0.283);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_156.setTransform(230.6,-17.5,0.283,0.283);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#39489A").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_157.setTransform(230.6,-25.5,0.283,0.283);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_158.setTransform(218.7,23.1,0.283,0.283);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_159.setTransform(218.7,15,0.283,0.283);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_160.setTransform(218.7,16.5,0.283,0.283);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_161.setTransform(218.7,8.5,0.283,0.283);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#4558A4").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_162.setTransform(223.7,-18.3,0.283,0.283);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4558A4").s().p("Ah1BlQgxgpgBg8QAAg6AygqQAxgqBEAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhEAAgxgqg");
	this.shape_163.setTransform(223.7,-26.4,0.283,0.283);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_164.setTransform(223.7,-9.6,0.283,0.283);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D77698").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqABA6QgBA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_165.setTransform(223.7,-17.6,0.283,0.283);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_166.setTransform(212.4,25.1,0.283,0.283);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_167.setTransform(212.4,17.1,0.283,0.283);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_168.setTransform(212.4,16.2,0.283,0.283);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_169.setTransform(212.4,8.2,0.283,0.283);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_170.setTransform(216.4,-10.7,0.283,0.283);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#303050").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAygqBEAAQBGAAAwAqQAyAqAAA6QAAA7gyAqQgwAqhGAAQhEAAgygqg");
	this.shape_171.setTransform(216.4,-18.7,0.283,0.283);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_172.setTransform(215.6,-18.3,0.283,0.283);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_173.setTransform(215.6,-26.4,0.283,0.283);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_174.setTransform(205.2,23.9,0.283,0.283);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_175.setTransform(205.2,15.8,0.283,0.283);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_176.setTransform(205.2,15.1,0.283,0.283);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_177.setTransform(205.2,7.1,0.283,0.283);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_178.setTransform(207.3,-7.2,0.283,0.283);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#4558A4").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAxgqBFAAQBGAAAwAqQAyAqgBA6QABA8gyApQgwAqhGAAQhFAAgxgqg");
	this.shape_179.setTransform(207.3,-15.2,0.283,0.283);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_180.setTransform(208.1,-16.4,0.283,0.283);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_181.setTransform(208.1,-24.4,0.283,0.283);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_182.setTransform(198.5,22.2,0.283,0.283);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D77698").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBGAAAxAqQAxAqgBA6QABA7gxAqQgxAqhGAAQhFAAgxgqg");
	this.shape_183.setTransform(198.5,14.2,0.283,0.283);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_184.setTransform(197.1,15.1,0.283,0.283);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_185.setTransform(197.1,7.1,0.283,0.283);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_186.setTransform(200.6,-11.4,0.283,0.283);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#8080BC").s().p("Ah1BlQgygqAAg7QAAg6AygqQAxgqBEAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhEAAgxgqg");
	this.shape_187.setTransform(200.6,-19.5,0.283,0.283);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_188.setTransform(202.1,-18.8,0.283,0.283);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#303050").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QABA7gyAqQgxAqhFAAQhFAAgwgqg");
	this.shape_189.setTransform(202.1,-26.8,0.283,0.283);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_190.setTransform(264.9,25.8,0.283,0.283);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4CACE0").s().p("Ah1BlQgxgqgBg7QABg6AxgqQAwgqBFAAQBGAAAwAqQAxAqAAA6QAAA7gxAqQgwAqhGAAQhFAAgwgqg");
	this.shape_191.setTransform(264.9,17.8,0.283,0.283);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_192.setTransform(264.9,19.2,0.283,0.283);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#303050").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAxgqBFAAQBGAAAwAqQAyAqAAA6QAAA7gyAqQgwAqhGAAQhFAAgxgqg");
	this.shape_193.setTransform(264.9,11.2,0.283,0.283);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_194.setTransform(266,-9.5,0.283,0.283);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_195.setTransform(266,-17.5,0.283,0.283);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#4558A4").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_196.setTransform(266,-18.8,0.283,0.283);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_197.setTransform(266,-26.8,0.283,0.283);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_198.setTransform(258.6,27.9,0.283,0.283);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAwgqBFAAQBFAAAyAqQAxAqAAA6QAAA7gxAqQgyAqhFAAQhFAAgwgqg");
	this.shape_199.setTransform(258.6,19.8,0.283,0.283);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_200.setTransform(258.6,19,0.283,0.283);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D77698").s().p("Ah2BlQgwgpAAg8QAAg6AwgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_201.setTransform(258.6,11,0.283,0.283);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_202.setTransform(257.3,-8.4,0.283,0.283);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_203.setTransform(257.3,-16.4,0.283,0.283);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_204.setTransform(257.8,-18,0.283,0.283);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#4558A4").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAygqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgygqg");
	this.shape_205.setTransform(257.8,-26,0.283,0.283);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_206.setTransform(251.3,26.6,0.283,0.283);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#303050").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAygqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgygqg");
	this.shape_207.setTransform(251.3,18.6,0.283,0.283);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_208.setTransform(251.3,17.9,0.283,0.283);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#4CACE0").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhEAAgygqg");
	this.shape_209.setTransform(251.3,9.8,0.283,0.283);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_210.setTransform(252.3,-7.6,0.283,0.283);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_211.setTransform(252.3,-15.7,0.283,0.283);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_212.setTransform(252.6,-18.8,0.283,0.283);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAyAqQAxAqgBA6QABA7gxAqQgyAqhFAAQhFAAgxgqg");
	this.shape_213.setTransform(252.6,-26.8,0.283,0.283);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_214.setTransform(244.7,24.9,0.283,0.283);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_215.setTransform(244.7,16.9,0.283,0.283);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_216.setTransform(243.3,17.9,0.283,0.283);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#4CACE0").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_217.setTransform(243.3,9.8,0.283,0.283);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_218.setTransform(245.2,-11.4,0.283,0.283);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_219.setTransform(245.2,-19.4,0.283,0.283);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_220.setTransform(245.2,-19.6,0.283,0.283);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_221.setTransform(245.2,-27.6,0.283,0.283);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_222.setTransform(510.3,31,0.284,0.284);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#8080BC").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_223.setTransform(510.3,23,0.284,0.284);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_224.setTransform(510.3,21.9,0.284,0.284);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_225.setTransform(510.3,13.9,0.284,0.284);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_226.setTransform(502.4,28.4,0.284,0.284);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D77698").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBFAAAyAqQAxAqAAA6QAAA7gxAqQgyAqhFAAQhFAAgwgqg");
	this.shape_227.setTransform(502.4,20.4,0.284,0.284);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#4558A4").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_228.setTransform(502.4,21.8,0.284,0.284);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#4558A4").s().p("Ah2BlQgwgpAAg8QAAg6AwgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgxgqg");
	this.shape_229.setTransform(502.4,13.8,0.284,0.284);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_230.setTransform(496.1,30.4,0.284,0.284);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#8080BC").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_231.setTransform(496.1,22.4,0.284,0.284);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_232.setTransform(496.1,21.6,0.284,0.284);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_233.setTransform(496.1,13.5,0.284,0.284);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_234.setTransform(488.8,29.2,0.284,0.284);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_235.setTransform(488.8,21.1,0.284,0.284);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_236.setTransform(488.8,20.4,0.284,0.284);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_237.setTransform(488.8,12.4,0.284,0.284);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_238.setTransform(482.1,27.5,0.284,0.284);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_239.setTransform(482.2,19.5,0.284,0.284);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_240.setTransform(480.8,20.4,0.284,0.284);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D77698").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgxgqg");
	this.shape_241.setTransform(480.8,12.4,0.284,0.284);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_242.setTransform(509.8,-8.6,0.284,0.284);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#303050").s().p("Ah1BlQgygpABg8QgBg6AygqQAwgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhFAAgwgqg");
	this.shape_243.setTransform(509.8,-16.6,0.284,0.284);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_244.setTransform(509.8,-17.7,0.284,0.284);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#39489A").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhFAAgxgqg");
	this.shape_245.setTransform(509.8,-25.7,0.284,0.284);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_246.setTransform(501.9,-11.2,0.284,0.284);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#303050").s().p("Ah2BlQgwgpgBg8QAAg6AxgqQAygqBEAAQBGAAAxAqQAwAqAAA6QAAA8gwApQgxAqhGAAQhEAAgygqg");
	this.shape_247.setTransform(501.9,-19.2,0.284,0.284);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_248.setTransform(501.9,-17.8,0.284,0.284);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#4CACE0").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_249.setTransform(501.9,-25.8,0.284,0.284);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_250.setTransform(495.5,-9.2,0.284,0.284);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_251.setTransform(495.5,-17.2,0.284,0.284);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_252.setTransform(495.5,-18,0.284,0.284);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_253.setTransform(495.5,-26.1,0.284,0.284);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_254.setTransform(488.3,-10.4,0.284,0.284);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#4CACE0").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAxgqBFAAQBFAAAyAqQAwAqABA6QgBA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_255.setTransform(488.3,-18.5,0.284,0.284);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#8080BC").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_256.setTransform(488.3,-19.2,0.284,0.284);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#8080BC").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgxgqg");
	this.shape_257.setTransform(488.3,-27.2,0.284,0.284);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_258.setTransform(481.6,-12.1,0.284,0.284);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_259.setTransform(481.6,-20.1,0.284,0.284);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_260.setTransform(480.3,-19.2,0.284,0.284);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAyAqQAxAqAAA6QAAA8gxApQgyAqhFAAQhFAAgwgqg");
	this.shape_261.setTransform(480.3,-27.2,0.284,0.284);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_262.setTransform(457.2,28.2,0.284,0.284);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_263.setTransform(457.2,20.1,0.284,0.284);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_264.setTransform(457.2,19,0.284,0.284);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_265.setTransform(457.2,11,0.284,0.284);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_266.setTransform(449.3,25.5,0.284,0.284);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_267.setTransform(449.3,17.5,0.284,0.284);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_268.setTransform(449.3,18.9,0.284,0.284);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_269.setTransform(449.3,10.9,0.284,0.284);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_270.setTransform(443,27.6,0.284,0.284);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_271.setTransform(443,19.5,0.284,0.284);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_272.setTransform(443,18.7,0.284,0.284);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_273.setTransform(443,10.7,0.284,0.284);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_274.setTransform(435.7,26.3,0.284,0.284);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_275.setTransform(435.7,18.3,0.284,0.284);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_276.setTransform(435.7,17.6,0.284,0.284);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_277.setTransform(435.7,9.5,0.284,0.284);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_278.setTransform(429.1,24.6,0.284,0.284);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#3C3D7B").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_279.setTransform(429.1,16.6,0.284,0.284);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_280.setTransform(427.7,17.6,0.284,0.284);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_281.setTransform(427.7,9.5,0.284,0.284);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#3C3D7B").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_282.setTransform(458,-9.9,0.284,0.284);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAyAqQAxAqAAA6QAAA7gxAqQgyAqhFAAQhEAAgxgqg");
	this.shape_283.setTransform(458,-17.9,0.284,0.284);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_284.setTransform(458,-19,0.284,0.284);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#303050").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAygqBEAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhEAAgygqg");
	this.shape_285.setTransform(458,-27.1,0.284,0.284);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_286.setTransform(450,-12.5,0.284,0.284);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBGAAAxAqQAwAqAAA6QAAA7gwAqQgxAqhGAAQhFAAgwgqg");
	this.shape_287.setTransform(450,-20.6,0.284,0.284);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_288.setTransform(450,-19.1,0.284,0.284);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#4CACE0").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAxAqAAA6QAAA8gxApQgyAqhFAAQhFAAgxgqg");
	this.shape_289.setTransform(450,-27.1,0.284,0.284);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_290.setTransform(443.7,-10.5,0.284,0.284);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA7gyAqQgxAqhFAAQhFAAgxgqg");
	this.shape_291.setTransform(443.7,-18.5,0.284,0.284);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_292.setTransform(443.7,-19.4,0.284,0.284);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#D77698").s().p("Ah2BlQgwgpAAg8QAAg6AwgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgxgqg");
	this.shape_293.setTransform(443.7,-27.4,0.284,0.284);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_294.setTransform(436.5,-11.7,0.284,0.284);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#303050").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgwgqg");
	this.shape_295.setTransform(436.5,-19.8,0.284,0.284);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_296.setTransform(436.5,-20.5,0.284,0.284);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_297.setTransform(436.5,-28.5,0.284,0.284);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_298.setTransform(429.8,-13.4,0.284,0.284);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_299.setTransform(429.8,-21.5,0.284,0.284);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_300.setTransform(428.4,-20.5,0.284,0.284);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#D77698").s().p("Ah2BlQgxgqABg7QgBg6AxgqQAygqBEAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhEAAgygqg");
	this.shape_301.setTransform(428.4,-28.5,0.284,0.284);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_302.setTransform(406.4,28.6,0.283,0.283);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_303.setTransform(406.4,20.5,0.283,0.283);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_304.setTransform(406.4,19.4,0.283,0.283);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_305.setTransform(406.4,11.4,0.283,0.283);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_306.setTransform(407.2,-8.3,0.283,0.283);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_307.setTransform(407.2,-16.3,0.283,0.283);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_308.setTransform(407.2,-17.4,0.283,0.283);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_309.setTransform(407.2,-25.4,0.283,0.283);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_310.setTransform(398.5,25.9,0.283,0.283);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#8080BC").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAygqBEAAQBGAAAwAqQAxAqABA6QgBA7gxAqQgwAqhGAAQhEAAgygqg");
	this.shape_311.setTransform(398.5,17.9,0.283,0.283);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_312.setTransform(398.5,19.4,0.283,0.283);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_313.setTransform(398.5,11.3,0.283,0.283);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_314.setTransform(399.2,-10.9,0.283,0.283);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_315.setTransform(399.2,-18.9,0.283,0.283);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_316.setTransform(399.2,-17.5,0.283,0.283);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_317.setTransform(399.2,-25.5,0.283,0.283);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_318.setTransform(392.2,28,0.283,0.283);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_319.setTransform(392.2,19.9,0.283,0.283);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_320.setTransform(392.2,19.1,0.283,0.283);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_321.setTransform(392.2,11.1,0.283,0.283);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_322.setTransform(392.9,-8.9,0.283,0.283);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_323.setTransform(392.9,-16.9,0.283,0.283);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#8080BC").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_324.setTransform(392.9,-17.7,0.283,0.283);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_325.setTransform(392.9,-25.8,0.283,0.283);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_326.setTransform(385,26.7,0.283,0.283);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_327.setTransform(385,18.7,0.283,0.283);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_328.setTransform(385,18,0.283,0.283);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#3C3D7B").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_329.setTransform(385,9.9,0.283,0.283);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_330.setTransform(385.7,-10.1,0.283,0.283);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_331.setTransform(385.7,-18.2,0.283,0.283);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_332.setTransform(385.7,-18.9,0.283,0.283);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_333.setTransform(385.7,-26.9,0.283,0.283);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_334.setTransform(378.3,25,0.283,0.283);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_335.setTransform(378.3,17,0.283,0.283);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_336.setTransform(376.9,18,0.283,0.283);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#D77698").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqABA6QgBA8gwApQgxAqhGAAQhFAAgxgqg");
	this.shape_337.setTransform(376.9,9.9,0.283,0.283);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_338.setTransform(379,-11.8,0.283,0.283);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#4CACE0").s().p("Ah2BlQgwgpgBg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_339.setTransform(379,-19.8,0.283,0.283);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_340.setTransform(377.7,-18.9,0.283,0.283);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_341.setTransform(377.6,-26.9,0.283,0.283);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_342.setTransform(316.4,26.7,0.283,0.283);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#4CACE0").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAxgqBFAAQBGAAAxAqQAwAqAAA6QAAA8gwApQgxAqhGAAQhEAAgygqg");
	this.shape_343.setTransform(316.4,18.7,0.283,0.283);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_344.setTransform(316.4,17.6,0.283,0.283);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#D77698").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhEAAgygqg");
	this.shape_345.setTransform(316.4,9.6,0.283,0.283);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_346.setTransform(316.4,-8.9,0.283,0.283);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#4558A4").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgxgqg");
	this.shape_347.setTransform(316.4,-16.9,0.283,0.283);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_348.setTransform(316.4,-18,0.283,0.283);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#303050").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgygqg");
	this.shape_349.setTransform(316.4,-26,0.283,0.283);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_350.setTransform(308.4,24.1,0.283,0.283);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_351.setTransform(308.4,16,0.283,0.283);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_352.setTransform(308.4,17.5,0.283,0.283);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_353.setTransform(308.4,9.5,0.283,0.283);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_354.setTransform(308.4,-11.5,0.283,0.283);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_355.setTransform(308.4,-19.6,0.283,0.283);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#3C3D7B").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_356.setTransform(308.4,-18.1,0.283,0.283);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_357.setTransform(308.4,-26.1,0.283,0.283);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_358.setTransform(302.1,26.1,0.283,0.283);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#4CACE0").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAygqBEAAQBGAAAwAqQAyAqgBA6QABA8gyApQgwAqhGAAQhEAAgygqg");
	this.shape_359.setTransform(302.1,18.1,0.283,0.283);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_360.setTransform(302.1,17.3,0.283,0.283);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#D77698").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAygqBEAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhEAAgygqg");
	this.shape_361.setTransform(302.1,9.2,0.283,0.283);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_362.setTransform(302.1,-9.5,0.283,0.283);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#4CACE0").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAygqBEAAQBFAAAyAqQAwAqABA6QgBA8gwApQgyAqhFAAQhEAAgygqg");
	this.shape_363.setTransform(302.1,-17.5,0.283,0.283);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_364.setTransform(302.1,-18.3,0.283,0.283);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#D77698").s().p("Ah2BlQgwgpAAg8QAAg6AwgqQAxgqBFAAQBFAAAyAqQAxAqgBA6QABA8gxApQgyAqhFAAQhFAAgxgqg");
	this.shape_365.setTransform(302.1,-26.4,0.283,0.283);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_366.setTransform(294.9,24.8,0.283,0.283);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_367.setTransform(294.9,16.8,0.283,0.283);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_368.setTransform(294.9,16.1,0.283,0.283);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_369.setTransform(294.9,8.1,0.283,0.283);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_370.setTransform(294.9,-10.7,0.283,0.283);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_371.setTransform(294.9,-18.8,0.283,0.283);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_372.setTransform(294.9,-19.5,0.283,0.283);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_373.setTransform(294.9,-27.5,0.283,0.283);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_374.setTransform(288.2,23.2,0.283,0.283);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_375.setTransform(288.2,15.2,0.283,0.283);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_376.setTransform(286.8,16.1,0.283,0.283);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_377.setTransform(286.9,8.1,0.283,0.283);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_378.setTransform(288.2,-12.4,0.283,0.283);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_379.setTransform(288.2,-20.4,0.283,0.283);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_380.setTransform(286.8,-19.5,0.283,0.283);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_381.setTransform(286.9,-27.5,0.283,0.283);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_382.setTransform(361.9,28,0.283,0.283);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_383.setTransform(361.9,19.9,0.283,0.283);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_384.setTransform(361.9,18.8,0.283,0.283);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_385.setTransform(361.9,10.8,0.283,0.283);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_386.setTransform(364.6,-8.1,0.283,0.283);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_387.setTransform(364.6,-16.2,0.283,0.283);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQAqApAAA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_388.setTransform(364.6,-17.3,0.283,0.283);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_389.setTransform(364.6,-25.3,0.283,0.283);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_390.setTransform(354.9,24.2,0.283,0.283);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_391.setTransform(354.9,16.2,0.283,0.283);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_392.setTransform(354.9,17.7,0.283,0.283);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_393.setTransform(354.9,9.6,0.283,0.283);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_394.setTransform(357.6,-11.9,0.283,0.283);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_395.setTransform(357.6,-19.9,0.283,0.283);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_396.setTransform(357.6,-18.5,0.283,0.283);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_397.setTransform(357.6,-26.5,0.283,0.283);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_398.setTransform(347.7,27.4,0.283,0.283);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_399.setTransform(347.7,19.3,0.283,0.283);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_400.setTransform(347.7,18.5,0.283,0.283);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_401.setTransform(347.7,10.5,0.283,0.283);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#3C3D7B").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_402.setTransform(350.4,-8.8,0.283,0.283);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_403.setTransform(350.4,-16.8,0.283,0.283);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_404.setTransform(350.4,-17.6,0.283,0.283);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_405.setTransform(350.4,-25.7,0.283,0.283);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QABg5ApgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_406.setTransform(340.5,26.1,0.283,0.283);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_407.setTransform(340.5,18.1,0.283,0.283);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_408.setTransform(340.5,17.4,0.283,0.283);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_409.setTransform(340.5,9.3,0.283,0.283);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_410.setTransform(343.2,-10,0.283,0.283);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_411.setTransform(343.2,-18.1,0.283,0.283);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_412.setTransform(343.2,-18.7,0.283,0.283);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_413.setTransform(343.2,-26.8,0.283,0.283);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_414.setTransform(333.8,24.4,0.283,0.283);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#4558A4").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_415.setTransform(333.8,16.4,0.283,0.283);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_416.setTransform(332.4,17.4,0.283,0.283);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_417.setTransform(332.4,9.3,0.283,0.283);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_418.setTransform(336.5,-11.7,0.283,0.283);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#4CACE0").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBGAAAxAqQAwAqAAA6QAAA8gwApQgxAqhGAAQhFAAgwgqg");
	this.shape_419.setTransform(336.5,-19.7,0.283,0.283);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_420.setTransform(335.1,-18.7,0.283,0.283);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_421.setTransform(335.1,-26.8,0.283,0.283);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#3C3D7B").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_422.setTransform(15.6,-14.7,0.284,0.284);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_423.setTransform(15.6,-22.7,0.284,0.284);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3C383A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_424.setTransform(15.3,32.9,0.284,0.284);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#3C383A").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_425.setTransform(15.3,24.9,0.284,0.284);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_426.setTransform(16.2,27.5,0.284,0.284);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#39489A").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAxgqBFAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhFAAgxgqg");
	this.shape_427.setTransform(16.2,19.5,0.284,0.284);


}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-37,515.2,73.9);


(lib.bigPlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59473D").ss(7.8).p("APLDrIhohOQiCheiChKQmgjykEAeQmMAtixAxQkJBJgwCC");
	this.shape.setTransform(595.2,-769.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AiGCHQg4g3AAhQQAAhOA4g4QA3g5BPAAQBPAAA4A5QA4A4AABOQAABQg4A3Qg4A5hPAAQhPAAg3g5g");
	this.shape_1.setTransform(599.8,-746.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4766AE").s().p("AlVEhQglgegOg4QgMgvAAhbQAAimB3h3QB3h3CmAAQCoAAB2B3QB3B3AACmQAABYgSAxQgSA1guAdQhRAzkLAFIgkAAQjYAAhAgzg");
	this.shape_2.setTransform(599.7,-748.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AKuGiQlbhFnkg1QnUgziTALQhFAFhCgzQg+gwgkhNQglhQAKhJQALhTBDgyQC4iKEtg9QGFhQF5B1QCCBECPBSQEcClA8BLQArA1AcBIQAhBWgJBBQgRCDiwAAQg+AAhQgQg");
	this.shape_3.setTransform(599.7,-748.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#765949").s().p("AK5DIQmYkSp0gPQk7gIjpAvIECiiQJbgGFPBnQB+AnB/BBQCMBOBJAnQC3BihwAIIgYABQgzAAhKgNg");
	this.shape_4.setTransform(603.6,-798.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#59473D").ss(7.8).p("ASQxJIhEAUQhXAchiAoQk4CBktDLQmjEclRGIQmlHpkIJ4");
	this.shape_5.setTransform(548.9,-1171.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59473D").ss(7.8).p("AZK48Ih7AiQidAuirA/QojDMnYEwQqVGpmkIyQoNLBhzNz");
	this.shape_6.setTransform(504.6,-1184.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#59473D").ss(7.8).p("AvDDsQCch/DQh4QGhjyEDAeQGMAuCyAxQEJBJAwCB");
	this.shape_7.setTransform(1010.9,-772.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#292929").s().p("AiGCIQg5g5AAhPQAAhPA5g4QA4g4BOAAQBPAAA5A4QA4A4AABPQAABPg4A5Qg5A4hPAAQhOAAg4g4g");
	this.shape_8.setTransform(1007.1,-749.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4766AE").s().p("AAaFUQkLgFhRgzQgugdgSg1QgSgyAAhXQAAinB3h2QB2h3CnAAQCoAAB2B3QB3B2AACnQAABbgMAvQgOA4glAeQhBAzjXAAIgkAAg");
	this.shape_9.setTransform(1007.1,-751.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Av8EvQgJhBAhhWQAdhJAqg0QA8hLEcilIERiWQF6h1GFBPQEsA+C4CKQBDAyALBTQAKBJglBQQgjBNg/AwQhCAzhEgFQiTgLnVAzQnkA1lbBEQhRAQg+AAQivAAgRiCg");
	this.shape_10.setTransform(1007.1,-751.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#765949").s().p("AtMDUQhxgIC3hiQCMhPBJglQB/hCB+gmQFPhnJbAGIECChIicgWQjDgWjFAFQp0AQmXESIg2AHQgrAFgfAAIgVgBg");
	this.shape_11.setTransform(1003.2,-802.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#59382D").s().p("AnEGXQByimB6jRQD1mgAtjWQAtjWCrgKQA2gDA8ASIAxASIgagDQghAAgeAMQhgAnglCSIg9DpIA+B5QBCCUAaCIQBSG2lgCjQArhTAfiEQBAkJg6j6Qg5j7ghBoQgQA0gEBmInBOGg");
	this.shape_12.setTransform(1229,-601.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#59473D").ss(7).p("AjS1mQCKg3CwACQFiADDEEaQBzCnATFRQASFIhPFbQhTFxiiDwQi1EOjtAiIhoBoQiAB5hxBYQlqEahNicQhOibAIklQADhcALhfIDX94g");
	this.shape_13.setTransform(1262.8,-617.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4BB94").s().p("ArQVlQhOibAIklQADhcALhfIDX94IFfjYQCKg3CwACQFiADDEEaQBzCnATFRQASFIhPFbQhTFxiiDwQi1EOjtAiIhoBoQiAB5hxBYQjpC1hzAAQhAAAgbg3g");
	this.shape_14.setTransform(1262.8,-617.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#59382D").s().p("AgJhPQgFhmgPg0Qghhog5D7Qg7D6BAEJQAfCEAsBTQlhijBTm2QAZiIBDiUIA9h4Ig8jqQgliShhgnQgwgTgpAKQBNgmBWAFQCrAKAtDWQAuDWDfHTQBwDqBnC/IAPE7g");
	this.shape_15.setTransform(378.9,-600.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#59473D").ss(7).p("ADT1mIhbgbQhxgbhuABQliADjEEaQhzCngTFRQgSFIBPFbQBUFwChDwQC1EODtAjQClCsC0CMQFqEaBNibQBOibgIkmQgDhbgKhfIjY94g");
	this.shape_16.setTransform(346.4,-600.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4BB94").s().p("AEaTmQi0iMilisQjtgji1kOQihjwhUlwQhPlbASlIQATlRBzinQDEkaFigDQBugBBxAbIBbAbIFfDYIDYd4QAKBfADBbQAIEmhOCbQgbA3hAAAQhzAAjpi2g");
	this.shape_17.setTransform(346.4,-600.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59473D").ss(11.7).p("EAHXg6TIjagGQkVgCktAPQvBAws3DRQyBElrHI8Qt6LMiSRZQkMf4CyQHQA4FCBeC2QAvBbAkAbQB5C7CsDOQFYGbD+BdQBIAaAYjxQAVjUgTldQgSlKgskZQgtkngxhFQC6iSEXjtQItnaHOnFQKHp6Frn1QHHp0gRmBQNaF9NTGzQaoNlgeEMQAbgVAbgvQA2hfAAiEQAAmmoZqAQFsFHFuGhQLdNBAPG/QAhAJAogJQBSgUAphdQCDkqlHuaIN0ayIhRFHQhdGKg6FWQi4REDuCXQBnj/CTjzQElnlDYA8QB5AhBem4QBRl8Asp+QAopGgGoOQgGoWgziQQiem7gUg0Qifmgi4lpQomw5rfonQp1nWpKjLQnVihmkARQksAMj2BkQh7Ayg/Avg");
	this.shape_18.setTransform(794.7,-1052);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#936B53").s().p("EA+PAp+QA6lWBdmKIBRlHIt06yQFHOaiDEqQgpBdhSAUQgoAJghgJQgPm/rdtBQlumhlslHQIZKAAAGmQAACEg2BfQgbAvgbAVQAekM6otlQtTmztal9QARGBnHJ0QlrH1qHJ6QnOHFotHaQkXDti6CSQAxBFAtEnQAsEZASFKQATFdgVDUQgYDxhIgaQj+hdlYmbQisjOh5i7QgkgbgvhbQhei2g4lCQiywHEM/4QCSxZN6rMQLHo8SBklQM3jRPBgwQEtgPEVACIDaAGQA/gvB7gyQD2hkEsgMQGkgRHVChQJKDLJ1HWQLfInImQ5QC4FpCfGgQAUA0CeG7QAzCQAGIWQAGIOgoJGQgsJ+hRF8QheG4h5ghQjYg8klHlQiTDzhnD/QjuiXC4xEg");
	this.shape_19.setTransform(794.7,-1053.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D3E36").s().p("AjIDkQmrgglghYQlUhVgxhPQhOiBBegoQAegNArgCIAlAAQLoE3OdhjQEhgfERhFIDXg+QDVAOgNA9QgHAfgxAcQjdDAnFBFQjuAkkVAAQirAAi8gNg");
	this.shape_20.setTransform(802,-441.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#765949").s().p("AjfCRIgdgRQglgWgugVQiThCisgcQi+gghYg2QhLgvAdgjQBzAbCMAXQEXAwB+gRQB/gRBhA5QAfASAYAXIASATICMhaQA9gNBOgMQCdgaBYAAQB7AACsgmQCVgiAogkIgPAWQgqAzhBAxQjRCalqBDIggArQgrAwg2AbQg9AehDAAQh4AAiMhlg");
	this.shape_21.setTransform(806.5,-549.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#765949").s().p("AWLITQhUhlhzhiQlvk7oSirQoSiso4CBQkcBAiyBjQkhARA3iAQAQgoAygyIAtgpQJJk5JCgUQHNgRGzCqQE3B6EKDKQBUBABFBAIA0AyIAAI2g");
	this.shape_22.setTransform(1042.1,-878.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#765949").s().p("A3oGsQAGg4AUhGIASg7QFspvJqieQDYg3EGgBQAzAAFAARQECAND/BrQBlApCMBJIEHCLQDrB8irA5QhWAbiFAEQsekGnsA/QipAWi7BFIiUA5QhXAig6ARQiDAph0BhQhSBFhhB5Qh7CZgRASQhJBNg9AJIgUACQhhAAATing");
	this.shape_23.setTransform(565.3,-887.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#59473D").ss(7.9).p("EhJ8gCTIAbCTQAlC9AwDQQCZKXDKJOQEaM6FWIyQGqK+HuD3QGUDKHGEHQG/EDCABAQELCEEAA0QEcA6GlgHQGggGJei+QIpisJMkdQI2kSGgkfQGwkrB2jTQB7jZC6nMQC9nRCvoGQC/o1Bvm9QB+n4gBj9QgDnCqH/uQjLp6jyrMIjKpNMhC1gHBMgnPAMWg");
	this.shape_24.setTransform(794.7,-727.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4BB94").s().p("EgL+BNeQkAg0kLiEQiAg/m/kDQnGkImUjKQnuj3mqq+QlWoxkas6QjKpPiZqXQgwjQgli8IgbiUMAVmg/oMAnPgMWMBC1AHBIDKJOQDyLLDLJ7QKHfuADHBQABD+h+H4QhvG8i/I2QivIGi9HRQi6HMh7DZQh2DTmvEqQmhEgo2ESQpMEcopCtQpeC9mgAHIhTABQluAAkAg1g");
	this.shape_25.setTransform(794.8,-727.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(9.7).p("A1bl1IARAxQAXA+AfBBQBiDSCJCqQG2IiKTg4QLvhAFblRQCciXA3jAQA1i5gtjNQgpi4mygcQlbgWpGBOQqZBZqLCbg");
	this.shape_26.setTransform(798.8,-225.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4BB94").s().p("AwoC3QiIiqhjjSQgfhBgXg+IgRgxQKLibKahZQJFhOFcAWQGyAcAoC4QAtDNg1C5Qg3DAibCXQlbFRrwBAQg8AGg8AAQpDAAmOnwg");
	this.shape_27.setTransform(798.7,-225.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(7.8).p("EhIsgWEQBCgSBagTQDhgwDIgKQDygLCAAzQCsBEDdgMQBFgEBBgMIA0gLQA6AjBPB1QCfDpBsGbQCWI/AaNNQAhQiilWQIgFAjQADArAiApQBtCFGGBCQKcByIoBSQL8ByBYgSQGAhWFTg6QKThxC4A6QBtAjDhADQDgACDzgeQEHggDAg8QDZhDBQhaQCNidiDkjQgkhShViQQhPiHgTgvQhAihhsrSQhwrqATjZQAxo4AdkFQBDpnAyhMQBBhgC9AUQDSAWElChQEBCNEHicQBSgxBIhIIA5g/QDojzDpkOQHQodAAiOQAAhOmQkVQlPjoowlPQngkfnIj7Qm0jwhTgaQiFgpnbgRQjugJjTAAMgqgADGIofAXQqQAjo5A/Q8bDIj8GOIB3D/QCKEzBhD/QDNIggfC1QgQBbhLAAQhBAAgJgMQgIgMAogTQAwgYBVgYg");
	this.shape_28.setTransform(795.8,115.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4CACE0").s().p("EgOeA6+QoohSqbhyQmHhChtiFQgigpgCgrIAEgjQCl2QghwiQgatNiWo/QhsmbiejpQhPh1g7gjIg0ALQhBAMhFAEQjdAMishEQh/gzjyALQjJAKjhAwQhZAThDASQgQBbhLAAQhBAAgJgMQgIgMAogTQAxgYBUgYQAgi1jOogQhhj/iKkzIh2j/QD7mOcbjIQI5g/KQgjIIggXMAqggDGQDSAADuAJQHbARCFApQBTAaG0DwQHID7HgEfQIwFPFQDoQGQEVgBBOQAACOnQIdQjpEOjoDzIg5A/QhIBIhSAxQkGCckCiNQkkihjTgWQi9gUhBBgQgyBMhDJnQgcEFgyI4QgTDZBwLqQBsLSBBChQATAvBOCHQBVCQAkBSQCDEjiMCdQhRBajZBDQjAA8kHAgQjzAejggCQjhgDhtgjQi4g6qTBxQlTA6mABWQgMACgXAAQibAAqWhig");
	this.shape_29.setTransform(796.1,115.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#59473D").ss(7.9).p("EATEgkhIj0B/QkoCekHCeQtIH6i/E7QhgCfi/EhQhtCljiFUQmOJYgQBdQgMBKACD8QACEoAZESQBHMUDNBFQBrAjAZiHQAQhYgQj+QgRkfAIh3QAPjXBXhPQCIh4BAg7QBuhnA+hNQCjjKhGicQhXjDAWiqQAZi/CgheQAigUBXhGQBzhcBJg5QEgjkDziOQMYnRJbDg");
	this.shape_30.setTransform(166.2,75.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4BB94").s().p("EgVaAkYQjNhEhHsUQgZkTgCkoQgCj8AMhKQAQhcGOpZIFPn5QC/khBgieQC/k8NIn5QEHifEoieID0h+IHUUYQpbjgsYHQQjzCPkgDjIi8CWQhXBFgiAUQigBegZC/QgWCqBXDDQBGCdijDKQg+BMhuBnQhAA8iIB3QhXBPgPDXQgIB3AREgQAQD+gQBXQgUBrhHAAQgTAAgWgHg");
	this.shape_31.setTransform(167.5,75.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AqGntICTB7QBYBJA/AuQB8BaDVCBQBeA4BlgSQASBIAzBEQAkAtBHBBQAzAuBPA/ICFBqQATAQAFAHQsnkhnmq6g");
	this.shape_32.setTransform(172.8,399.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("Am3EVQCThzA4iPQAyAVA9gJQAmgGBHgZQC6hBC2h1QCfhnCniWIAagYIAIgBQgyBvinCYQidCPjcCOQjbCPjYBjQjmBpikAaQC7h1BVhDg");
	this.shape_33.setTransform(464.6,409.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AkiMtQgVgqgBgqQgctmHUrMQAHgLAOgIQAOgIANgCQAZgDAjAAIA7ABQADAAAGACIALAFQh+E2gvF+QgMBpgBBFQgCBeASBOQAIAfAWA/Qg5Acg0A4QgeAig1BMQifDeg9DeQgjgpgSgjg");
	this.shape_34.setTransform(89.5,133.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("ACAM4IhXirQg0hlgnhDQhcieiNhNQA4heAPh6QAJhIgDiWQgHlfhalSIgCgcQBMAABQAYQBBATBQAnQAHAEAMAYQDJGOBAG2QAkD8gNERQgEBagjBWQggBSg9BSg");
	this.shape_35.setTransform(564.9,152.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AjSEhQg/gfh/grQhzgnilgvIkbhPQghgJgFgKQgFgLAPgcQAfg6A5g3QAggfBNg+QALgJAZgRQAYgRAMgJQBHg6BmgdQBEgTB6gOQHkg4HPBsIAYAGQAOAFAHAGICEB5QBNBGA0A1QBdBdAQCEIgxAGQnFAUmBCPQgjANgyAaIhVAuQg5hDhjgyg");
	this.shape_36.setTransform(329.8,-32.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("ApZQgQgsgDgugSQg4gXgKgeIiFmVQhTj8gwiaQgahUgkiFIg6jcQgGgWAEgPQAEgQAQgOIBthdQBCg4AugiQGTksG8kFQA5giAuACQAxABAyAoQBOA+DNCdQC0CLBmBSQBLA+BxBmIC6CnQArAlAMAqQAMAqgSA4QjBJVjsICQgZA3gnAZQgmAYg7ABInbAPg");
	this.shape_37.setTransform(317.9,243.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AowG4QgDgBgEgSQgHgnAHhFQAGg1Arg0QAbgfA8gyQB7hkCshlQBpg+DPhuQDMhsC2hVQACgBADAkIADApIABAoQgBAggIAEIiGBBQlXCpj0CTQirBohiBPQg7AwgdAiQgTAXgJARIgHARQgEAJAAgEQgCATgDAAIAAAAg");
	this.shape_38.setTransform(176.2,13.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AIGHfQgJg/gyhFQghguhAg/QhuhsiZhqQhxhOithlQi0hqiahLQgJgFAAgfIABgoQAEhPAEACQBIAkA2AdQFHCuDjCoQCiB2BZBkQAvA1AbAtQAiA6AJA4QAHAwgEA4QgFAmgDAAQgCAAgCgLg");
	this.shape_39.setTransform(481.3,28.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AoPDgQgHhKAQgFIB6gpQE6hsDehbQCcg/BggxIBGgkQArgaANgbQACgEAEAZQAEAXAAAJIACAvQAAAegHAQQgQAggyAeIhSApQi+Bej6BeQiVA3kwBmQgFglgEglg");
	this.shape_40.setTransform(483.5,205.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AEZFoIgEgYIgEgIQgIgPgNgUQgbgngsgwQhFhNh8h0QiFh8iOh2QgJgIgBgdIABgnIAJhMIBaBNQDhDCCBCJQAwA0APATQAjAqAUAlQAQAfADAsQAEAuAAATQgBAogLAYIAAABQgCAAgDgWg");
	this.shape_41.setTransform(411.5,385.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AF9TrIgEggIgDgwQAAghAJgNIASgaQBPhxA6hMQBOhkBJhNQAwgzATgPQArglAmgHIARgFQgNhKgYhaQgQg7gsiTQg8jFhSjzQguiEgWhRIgfh1IgFgUQgDgKgCgDQgNgQgdgWIgvgiQjTipjAiBQiChYhjgzQg3gdgigOQg0gWgsgHQhjgPheBrQgxA6hJCHQhLCNg2CUIASBJQBpGTBVENQA9DFAtBrIAfBNQAaA0AcAGQAOADgFBLQgGBMgDgCQgLgCgLgMIgQgWQgdgsgahBQgKgYgghbQgziQg4jCQhRkOhXlXQgRhFgEgjQgHg7AMgvQANgvAZg8IAuhpQAuhnAnhFQA0hcA5hDQA0g8AygXQA7gaBFAUQBGATBSAsQAxAaBdA6QCRBcCwCFQB5BbBmBUQAbARAIALQAMARAIAmIAMA7QAlCKB+F7QBrFDAqDGQARBQAGA+QAHBOgKBBQgDASgDAHQgFAMgMAFQgGACgPACQgNABgHAEQgWALgbAWQg+AzhDBOQgmAthKBiQhKBfg7BYIgBABQgCAAgDgWg");
	this.shape_42.setTransform(151.7,284.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgaKxQgEgHAAgPIAAgYIgBgvQAAgcAHgSQARgxAHhCQADgiAFhUQAIiFABifQAAh2gFitQgEiEgEhsIgEhRIgDg1QgBglAHgPQAIgNACAOIABAbIAHCYQAPFngEETQgDDUgMCJQgGBLgGAnQgIBAgRAvQAAABAAABQgBAAAAABQAAAAgBAAQAAAAAAAAQgCAAgCgKg");
	this.shape_43.setTransform(322.6,75.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIAAQAAhLAIAAQAJAAAABLQAABMgJAAQgJAAABhMg");
	this.shape_44.setTransform(106.2,49.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EgQbAm5QnkjNl2l1Ql2l2jNnlQjVn3AAolQAAolDVn1QDNnmF2l1QF2l2HkjNQH2jUIlAAQIlAAH2DUQHmDNF1F2QF2F1DNHmQDUH1AAIlQAAIljUH3QjNHll2F2Ql1F1nmDNQn2DUolAAQolAAn2jUg");
	this.shape_45.setTransform(326,196.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(7.8).p("Arsg3IWyk8IAuHBI1lEog");
	this.shape_46.setTransform(1077.9,1112.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1E1E1").s().p("Arwg4IWyk8IAvHBI1lEog");
	this.shape_47.setTransform(1078.2,1112.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(7.8).p("Aq/lrIW1EqIiLGuI1nkeg");
	this.shape_48.setTransform(559.2,1119.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E1E1E1").s().p("Ar5BOIA9m6IW1EqIiLGvg");
	this.shape_49.setTransform(558.9,1119.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F4F4F5").ss(7.8).p("AImhsIithBQjThIi7gkQpahziVEgIGGA+IM+CDIiWgqQi2guiigYQjDgciNAJQjsAOhTB1IQgDn");
	this.shape_50.setTransform(1116.7,1272.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F4F4F5").ss(7.8).p("AF+guIs/CDQDrhLEEglQDDgcCNAJQDsAOBTB1IwhDnAonhsQEPhzEsg6QJahzCWEgImGA+");
	this.shape_51.setTransform(1094.5,1272.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F4F4F5").ss(7.8).p("Al8guIM8CEIiWgrQi2guijgXQjBgciMAIgAImhsIithBQjThIi7gkQpahziVEgIGIA+QjuAOhUB2IQhDm");
	this.shape_52.setTransform(526.4,1296.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F4F4F5").ss(7.8).p("AonhsQEPhzEsg6QJahzCWEgImIA+QDtAOBUB2IwhDmAF8guIs9CEQDrhLEEglQDCgcCMAIg");
	this.shape_53.setTransform(504.2,1296.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3E3E3D").s().p("AFVR6IyBAIQgqgRg3gzQhuhlg8imQjCoUFwvaQBbhOCPhcQEei2EIhDQFwhdERCZQFUC/CoI2QCoI1hGFjQg3EcjLCJQiSBhjNAPQgkACgiAAQg6AAgwgIg");
	this.shape_54.setTransform(1105.5,1291.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(5.2).p("AJ3vuIAuDhQA3ERAqDpQCHLsgrBdQgxBokjCvQh3BHhoAvQhsAxgqAAQhxgBnBABInM6ng");
	this.shape_55.setTransform(1078,1136.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#304E56").s().p("ACWPxIoyAAInM6nIXck6IAuDgQA3ESAqDpQCHLsgrBcQgxBpkjCuQh3BIhoAvQhrAwgqAAIgBAAg");
	this.shape_56.setTransform(1078.3,1136.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3E3E3D").s().p("AFVR6IyBAIQgqgRg3gzQhuhlg8imQjCoUFwvaQBbhOCPhcQEei2EIhDQFwhdERCZQFUC/CoI2QCoI1hGFjQg3EcjLCJQiSBhjNAPQgkACghAAQg7AAgwgIg");
	this.shape_57.setTransform(516.1,1314.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(7.8).p("Ap5vbIXyFiIjoLZQjzLsg3BZQg4BZpcgkQkugSkjgjg");
	this.shape_58.setTransform(558,1138.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#304E56").s().p("AkqPWQkugSkjgkIEF9/IXyFiIjoLZQjzLsg3BYQgoBAlBAAQh+AAitgKg");
	this.shape_59.setTransform(557.7,1138.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3E3E3D").s().p("AiJBbQg5gmAAg1QAAg1A5glQA5gmBQAAQBRAAA5AmQA5AlAAA1QAAA1g5AmQg5AmhRAAQhQAAg5gmg");
	this.shape_60.setTransform(1141.1,1406.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4D3E36").s().p("AiJBcQg5gnAAg1QAAg1A5glQA5gmBQAAQBRAAA5AmQA5AlAAA1QAAA1g5AnQg5AlhRAAQhQAAg5glg");
	this.shape_61.setTransform(1141.1,1402.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3E3E3D").s().p("AiJBbQg5gmAAg1QAAg0A5gmQA5gmBQAAQBRAAA5AmQA5AmAAA0QAAA1g5AmQg5AmhRAAQhQAAg5gmg");
	this.shape_62.setTransform(1071.8,1410.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3E3E3D").s().p("AiJBcQg5gnAAg1QAAg1A5glQA6gmBPAAQBRAAA5AmQA5AlAAA1QAAA1g5AnQg5AlhRAAQhPAAg6glg");
	this.shape_63.setTransform(1046.5,1402.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3E3E3D").s().p("AiJBbQg5gmAAg1QAAg0A5gmQA5gmBQAAQBQAAA6AmQA5AmAAA0QAAA1g5AmQg6AmhQAAQhQAAg5gmg");
	this.shape_64.setTransform(1164.6,1410.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3E3E3D").s().p("AiJBbQg5glAAg2QAAg0A5gmQA5gmBQAAQBRAAA5AmQA5AmAAA0QAAA1g5AmQg5AmhRAAQhQAAg5gmg");
	this.shape_65.setTransform(543.6,1429.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D3E36").s().p("AiJBbQg5glAAg2QAAg0A5gmQA5gmBQAAQBQAAA6AmQA5AmAAA0QAAA1g5AmQg6AmhQAAQhQAAg5gmg");
	this.shape_66.setTransform(543.6,1425.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3E3E3D").s().p("AiJBbQg5glAAg2QAAg1A5glQA5gmBQAAQBRAAA5AmQA5AlAAA1QAAA2g5AlQg5AmhRAAQhQAAg5gmg");
	this.shape_67.setTransform(474.3,1433.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3E3E3D").s().p("AiJBbQg5glAAg2QAAg0A5gmQA5gmBQAAQBRAAA5AmQA5AmAAA0QAAA1g5AmQg5AmhRAAQhQAAg5gmg");
	this.shape_68.setTransform(449.1,1425.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3E3E3D").s().p("AiJBbQg5glAAg2QAAg1A5glQA6gmBPAAQBRAAA5AmQA5AlAAA1QAAA2g5AlQg5AmhRAAQhPAAg6gmg");
	this.shape_69.setTransform(567.1,1433.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3D707F").s().p("EArOAKsUgDrgFzgqagCGQtRgqvigNQnygHlHACMAwOgOZIdsDfQD8HQDNGFQEWIRgTAAQgJAAhMh3g");
	this.shape_70.setTransform(818.3,463);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3D707F").s().p("AljVAQhnq9g0pQQhIs7ApnoQA0piDigpQGbhKD2F5QBNB3AzCVQAZBKAKAzQkoiwjoAAQhagBhAAdQg5AZgRAmQgtBlgtGSQgaDwhBJnQgvGNBNMKQAnGGAwE1Qgpjpgzlfg");
	this.shape_71.setTransform(1092.7,164);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3D707F").s().p("Ao7lrQCllFDMlKICqkIQHFBfFtSbQByFwBcGwQAtDZAYCOIiBgNQiOgVg/gnQhEgoivpeQh4mfiiqJQhhmEhpCFQg2BCgiCQQijPjjVI6QhrEehKBVImbAYQgtpfISwPg");
	this.shape_72.setTransform(798,849);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(7.8).p("EgqMgoRIirJ0QjML0ikKJUgILAgXABKADHQArByGTCwQFyCiIJCXQIPCYGeA/QHIBGCHhHQCAhEByldQBVkHBWnNQBXn2Aii4QA5kxAjAAQAPAAAwgHQAbgEAOALQAfAZBWDWQAkBcBHE6QBmHKAgB/QC/L2DCAYQB5APEggEQEmgEFQgWQNEg3F0htQCNgqDkghQDPgeBDgZQBxgrAdhjQAhhvg6jdQhjmCnJ9+Im08yg");
	this.shape_73.setTransform(815.5,720.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#428EAD").s().p("EgWCAnvQmeg/oPiYQoJiXlyiiQmTiwgrhyUgBKgDHAILggXQCkqIDMr1ICrpzMBT5ABGIG0cyQHJd+BjGCQA6DeghBvQgdBihxArQhDAajPAeQjkAhiNApQl0ButEA3QlQAWkmAEQkgAEh5gPQjCgZi/r1Qggh/hmnKQhHk7gkhbQhWjXgfgYQgOgMgbAEQgwAIgPAAQgjAAg5ExQgiC4hXH2QhWHNhVEGQhyFdiABEQhEAkiVAAQiTAAjjgjg");
	this.shape_74.setTransform(815.5,720.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#59473D").ss(7.9).p("Awb2CMASUAyhIOgiQMgL3g2xIvuAAg");
	this.shape_75.setTransform(1060,1089.9,1,1,0,0,0,0.4,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F4BB94").s().p("Awa2AIFQmgIPuAAMAL3A2xIugCQg");
	this.shape_76.setTransform(1059.5,1089.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#59473D").ss(7.9).p("AnA2RMgHlAznIPNCFMAODgr/IAAyng");
	this.shape_77.setTransform(567.7,1061.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F4BB94").s().p("AuodOMAHlgzmIVso6IAASmMgOEAr/g");
	this.shape_78.setTransform(567.9,1062.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#59473D").ss(7.9).p("AlCBDQB4AWCMgKQEYgTBpig");
	this.shape_79.setTransform(1093.3,258.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F4BB94").s().p("AlCBMIKFinQhpCgkYATQgsAEgpAAQhdAAhSgQg");
	this.shape_80.setTransform(1093.3,257.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#59473D").ss(7.9).p("AHEs4QgCAAgBABQhVAthXD5QiLGQiLFmIjkgGQkUgCjpAXQrsBLgxEmQgyEnAULMQAKFmAUEqID2jUQBTBxCUBiQEnDDFEhKQFEhLGKneQB7iVB0isIBbiOQDxppDwp5QHizwAAhKQAAgsh8ieQh3iWiwi6Qi6jDiliPQi5iihpguQi4hSkxghQiYgQhzAAIhMRbQCCB3CpB5QEeDMC7AkQAhAGAfABIgSgLQgWgIgYAMg");
	this.shape_81.setTransform(1211.7,157.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F4BB94").s().p("EgQiAjnQiUhihThxIj2DUQgUkqgKlmQgUrMAyknQAxkmLshLQDpgXEUACIDkAGQCLlmCLmQQBXj5BVgtIADgBQi7gkkejMQiph5iCh3IBMxbQBzAACYAQQExAhC4BSQBpAuC5CiQClCPC6DDQCwC6B3CWQB8CeAAAsQAABKniTwQjwJ5jxJpIhbCOQh0Csh7CVQmKHelEBLQhaAUhXAAQjkAAjWiNg");
	this.shape_82.setTransform(1211.7,157.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#59473D").ss(2).p("AlPAtIB+gvQCPguBaAGQCKAJA8AJQBcAOAQAY");
	this.shape_83.setTransform(1003.1,-766.1,2.765,2.765);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F4BB94").s().p("AC7FKQh2gEgnAAQgxABiIgTIh/gSQgXAFgegCQg8gGgkgnQgxg4gqhnQgwhzAVgzQAag+BKhWQBPhcAtgIQAngHDlADQByABBrADICVAnQCWAtADAaQACAQAfCDQAeB8ABAbQABAHANAzQAMAwAAAeQAABlh7AGQhWAFhaAAIhGgBg");
	this.shape_84.setTransform(997.3,-751.1,2.765,2.765);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#59473D").ss(2).p("AFNAtQg2gYhIgXQiQguhZAGQiKAJg8AJQhcAOgQAY");
	this.shape_85.setTransform(599.4,-768.2,2.765,2.765);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F4BB94").s().p("AmwFGQh7gGAAhlQAAgeANgwQANgzAAgHQACgbAdh8QAfiCACgRQADgaCWgtQBLgWBLgRQBrgDBxgBQDmgDAnAHQAsAIBPBcQBLBWAZA9QAVA0gvBzQgrBngxA4QgkAng8AFIg1gDQjpAmhOgBIieAEIhGABQhaAAhWgFg");
	this.shape_86.setTransform(604.2,-753.2,2.765,2.765);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#F4F4F5").ss(7.8).p("Al+guIM+CDIiWgqQi2guiigYQjDgciNAJgAImhsIithBQjThIi7gkQpahziVEgIGGA+QjsAOhTB1IQgDn");
	this.shape_87.setTransform(1116.7,1272.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#F4F4F5").ss(7.8).p("AF+guQDsAOBTB1IwhDnAF+guIs/CDQDrhLEEglQDDgcCNAJgAonhsQEPhzEsg6QJahzCWEgImGA+");
	this.shape_88.setTransform(1094.5,1272.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#F4F4F5").ss(7.8).p("AF8guQDtAOBUB2IwhDmAonhsQEPhzEsg6QJahzCWEgImIA+Is9CEQDrhLEEglQDCgcCMAI");
	this.shape_89.setTransform(504.2,1296.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_89},{t:this.shape_52},{t:this.shape_88},{t:this.shape_87},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},67).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-1456.1,1377.5,2902.5);


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZA1IAAhGQAAgNgFgFQgGgFgJAAIgsAAIAAgMIAvAAQAgAAAAAkIAABFgAgnA1IAAg0IACgLIANAAIAAA/g");
	this.shape.setTransform(30.2,0.3,1.829,1.829);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwAsQAMgBADgGQAFgFAAgLIAAhKIAtAAQAgAAAAAkIAABFIgOAAIAAhGQAAgMgGgGQgFgFgKgBIgcAAIAAA9QAAAQgHAKQgIAHgRACg");
	this.shape_1.setTransform(9.6,0.6,1.829,1.829);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaA1IAAhDQABgNgGgHQgEgGgLAAIggAAIAABdIgOAAIAAhpIAxAAQAPAAAJAKQAIAJAAATIAABDg");
	this.shape_2.setTransform(-10,0.3,1.829,1.829);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOBEIAkhdIg6AAIAAgqIAOAAIAAAfIA7AAIAAAMIglBcg");
	this.shape_3.setTransform(-28,-2.5,1.829,1.829);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBFBF").s().p("Am8CtQgcAAgSgUQgUgTAAgbIABjXQAAgbATgTQATgUAcAAIN4ACQAbAAAUAUQATATAAAbIAADXQAAAbgUATQgTAUgbAAg");
	this.shape_4.setTransform(1.8,-2.6,1.829,1.829);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404040").s().p("AnKCtQgVAAgQgQQgPgPAAgWIABjxQAAgWAPgPQAQgQAVABIOTABQAWAAAPAQQAQAQAAAVIAADxQgBAWgQAPQgOAQgXAAg");
	this.shape_5.setTransform(1.8,0.9,1.829,1.829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.6,-34.5,186.9,67.4);


(lib.nextBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbA0IAAhFQAAgMgFgFQgGgFgKgBIgvAAIAAgLIAyAAQAiAAAAAjIAABEgAgqA0IAAgzIACgLIAOAAIAAA+g");
	this.shape.setTransform(68.8,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAEA1IgQgBIACgMIANACQARAAAIgLQAIgLAAgUQAAgpgeAAQgJAAgHAGQgHAFgCAKIgPBHIgPAAIAPhHIgQgfIAQAAIALAWQADgMAJgGQAJgFALAAQATAAALAMQAMAMAAAcQAAAZgMAOQgNAOgVAAIgBAAg");
	this.shape_1.setTransform(57.2,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1g0IAPAAIAHA0QAKgEAFgEQAEgGADgHQADgIAAgLIAAgLIAOAAIAAALQAAAUgIAMQgJAMgUAHIADAdQAfgBARgQQAQgRAAgeIAAgcIAQABIAAAaQABAmgYAUQgXAUgvAAg");
	this.shape_2.setTransform(44.4,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXBGIAAhpQAAgNgGgFQgFgFgLAAIgnAAIAAgMIAqAAQAjABAAAjIgBBog");
	this.shape_3.setTransform(32.8,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#92CE86").s().p("Am8CsQgbAAgUgSQgTgUAAgbIAAjXQAAgbAUgTQATgUAcAAIN5ACQAbAAATATQATAUAAAbIgBDXQAAAbgTATQgTAUgcAAg");
	this.shape_4.setTransform(51.1,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7CB772").s().p("AnJCtQgWgBgQgPQgPgQAAgVIAAjxQAAgWAQgPQAPgPAXgBIOSACQAWAAAPAQQAQAPAAAWIgBDxQABAWgQAPQgQAQgWAAg");
	this.shape_5.setTransform(51.1,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nextBtn, new cjs.Rectangle(0,0,102.2,36.8), null);


(lib.zoomBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAkQgHgDgGgFQgFgGgDgHQgDgHAAgIQAAgHADgHQADgHAFgFQAFgGAHgDQAHgDAIAAQAHAAAHACQAIADAFAGQAGAFADAHQADAIAAAHQAAAIgDAHQgDAHgFAGQgFAFgHADQgIADgIAAQgHAAgHgDg");
	this.shape.setTransform(5,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("EAk/AvbI2w2xQg5g5gEhUQgFhVA0hBQAMgPAAgJQgBgKgNgNInwnwQl+E5oJBtQlmBLlvg2Qmgg8lbjIQnEkFkem5QjmlihSnPIgGg/QgEglgOgXIAAmaIAOiDQAJhNAMg1QCGpTGWmoQE2lDFsigQCwhOCagqQCzgwCpgEQAIgBAFgEIGGAAQAeANAxAFIBPAIQJaBsG7GBQIrHgCMK9QDBPGpcMWQgRAWAAAOQAAAOAUAUQDIDEEAEEQAQARALAAQALAAASgPQA2guBNAAQBNAAA4AtQARANAfAfIWqWpQAnAmAAAbQgBAbgnAoInsHrQggAgg0AAIgBAAQg0AAgfgfg");
	this.shape_1.setTransform(7.1,7.1,0.023,0.023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,14.3);


(lib.Lastshot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0)").ss(2,1,1).p("AmYiFIMxAAIAAELIsxAAg");
	this.shape.setTransform(19.7,-12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,153,0.008)").s().p("AmYCGIAAkLIMxAAIAAELg");
	this.shape_1.setTransform(19.7,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(24));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,0,0.988)").ss(2,1,1).p("AmciCIM5AAIAAEFIs5AAg");
	this.shape_2.setTransform(20.1,-11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,0,0.886)").ss(2,1,1).p("AmciCIM5AAIAAEFIs5AAg");
	this.shape_3.setTransform(20.1,-11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,0,0.678)").ss(2,1,1).p("AmciCIM5AAIAAEFIs5AAg");
	this.shape_4.setTransform(20.1,-11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,0,0.518)").ss(2,1,1).p("AmciCIM5AAIAAEFIs5AAg");
	this.shape_5.setTransform(20.1,-11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,0,0.408)").ss(2,1,1).p("AmciCIM5AAIAAEFIs5AAg");
	this.shape_6.setTransform(20.1,-11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,0,0.788)").ss(2,1,1).p("AmciCIM5AAIAAEFIs5AAg");
	this.shape_7.setTransform(20.1,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-26.6,84.6,29);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.clocktxt = new cjs.Text("", "14px 'Assistant'");
	this.clocktxt.name = "clocktxt";
	this.clocktxt.textAlign = "center";
	this.clocktxt.lineHeight = 20;
	this.clocktxt.parent = this;
	this.clocktxt.setTransform(-0.8,-6.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB+AAQAAAzglAlQglAmg0AAQgzAAglgmQglglAAgzQAAgzAlgmQAEgCADgDQASgQAVgIQAUgHAWAAQAXAAAUAHQAVAIASAQQAEADADACQAlAmAAAzg");
	this.shape.setTransform(-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.clocktxt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(-14.1,-13.2,27.2,32.3), null);


(lib.rival = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBC72C").s().p("AAdChQgqhTgWh9IgOhtQADgEAHABQAEAFArCYQAsCZgCAEQgEAGgOAAIgDAAg");
	this.shape.setTransform(23.1,16.5,1,1,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3E317").s().p("AgPChQgqhKgNh9IgEhwQACgCASgFIARgFQAVATAwCOQAvCJgFADQgeAUghADg");
	this.shape_1.setTransform(23.9,16.7,1,1,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#645C58").ss(0.3).p("ABzhxQAwAvgBBCQAABEgwAvQgvAvhDAAQhDAAgvgwQgwgvABhDQAAhDAwgvQAvgvBDAAQBDAAAvAwg");
	this.shape_2.setTransform(23.2,16.3,1,1,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0A766").s().p("AhyByQgwgvABhDQAAhDAwgvQAvgvBDAAQBCAAAwAwQAwAvgBBCQAABEgwAvQgvAvhDAAQhCAAgwgwg");
	this.shape_3.setTransform(23.2,16.3,1,1,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#090F12").ss(0.3).p("AgNA7IApgHQArgPADgnQAEgwgogHQgmgHhMAj");
	this.shape_4.setTransform(39.1,18.3,1,1,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F47E20").s().p("AhLgdQBLgjAnAHQAoAHgDAwQgDAngrAPIgqAHg");
	this.shape_5.setTransform(39,18.2,1,1,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#090F12").ss(0.3).p("ABAAmQgOAPgVAJQgoAUgegbQgkggAXggQAYggBNgc");
	this.shape_6.setTransform(4.9,17.8,1,1,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F47E20").s().p("AgpA3QgkggAXggQAYggBNgcIARBrQgOAPgVAJQgRAIgOAAQgWAAgRgPg");
	this.shape_7.setTransform(4.9,17.8,1,1,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:4.9,y:17.8,rotation:20}},{t:this.shape_6,p:{x:4.9,y:17.8,rotation:20}},{t:this.shape_5,p:{x:39,y:18.2,rotation:20}},{t:this.shape_4,p:{x:39.1,y:18.3,rotation:20}},{t:this.shape_3,p:{x:23.2,y:16.3,rotation:20}},{t:this.shape_2,p:{x:23.2,y:16.3,rotation:20}},{t:this.shape_1,p:{x:23.9,y:16.7,rotation:20}},{t:this.shape,p:{x:23.1,y:16.5,rotation:20}}]}).to({state:[{t:this.shape_7,p:{x:7.9,y:17.8,rotation:20}},{t:this.shape_6,p:{x:7.9,y:17.8,rotation:20}},{t:this.shape_5,p:{x:42,y:18.2,rotation:20}},{t:this.shape_4,p:{x:42.1,y:18.3,rotation:20}},{t:this.shape_3,p:{x:26.2,y:16.3,rotation:20}},{t:this.shape_2,p:{x:26.2,y:16.3,rotation:20}},{t:this.shape_1,p:{x:26.9,y:16.7,rotation:20}},{t:this.shape,p:{x:26.1,y:16.5,rotation:20}}]},2).to({state:[{t:this.shape_7,p:{x:5.7,y:17,rotation:20}},{t:this.shape_6,p:{x:5.7,y:17,rotation:20}},{t:this.shape_5,p:{x:39.7,y:17.5,rotation:20}},{t:this.shape_4,p:{x:39.9,y:17.5,rotation:20}},{t:this.shape_3,p:{x:24,y:15.6,rotation:20}},{t:this.shape_2,p:{x:24,y:15.6,rotation:20}},{t:this.shape_1,p:{x:24.7,y:16,rotation:20}},{t:this.shape,p:{x:23.8,y:15.7,rotation:20}}]},2).to({state:[{t:this.shape_7,p:{x:7.2,y:17.6,rotation:14}},{t:this.shape_6,p:{x:7.2,y:17.6,rotation:14}},{t:this.shape_5,p:{x:41.2,y:14.5,rotation:14}},{t:this.shape_4,p:{x:41.3,y:14.5,rotation:14}},{t:this.shape_3,p:{x:25.3,y:14.2,rotation:14}},{t:this.shape_2,p:{x:25.3,y:14.2,rotation:14}},{t:this.shape_1,p:{x:26,y:14.6,rotation:14}},{t:this.shape,p:{x:25.2,y:14.4,rotation:14}}]},2).to({state:[{t:this.shape_7,p:{x:10.6,y:18.8,rotation:2.8}},{t:this.shape_6,p:{x:10.6,y:18.8,rotation:2.8}},{t:this.shape_5,p:{x:43.3,y:9.2,rotation:2.8}},{t:this.shape_4,p:{x:43.4,y:9.2,rotation:2.8}},{t:this.shape_3,p:{x:27.7,y:12,rotation:2.8}},{t:this.shape_2,p:{x:27.7,y:12,rotation:2.8}},{t:this.shape_1,p:{x:28.4,y:12.2,rotation:2.8}},{t:this.shape,p:{x:27.6,y:12.2,rotation:2.8}}]},2).to({state:[{t:this.shape_7,p:{x:7.5,y:15.1,rotation:7.8}},{t:this.shape_6,p:{x:7.5,y:15.1,rotation:7.8}},{t:this.shape_5,p:{x:40.9,y:8.3,rotation:7.8}},{t:this.shape_4,p:{x:41,y:8.3,rotation:7.8}},{t:this.shape_3,p:{x:25.1,y:9.8,rotation:7.8}},{t:this.shape_2,p:{x:25.1,y:9.8,rotation:7.8}},{t:this.shape_1,p:{x:25.8,y:10.1,rotation:7.8}},{t:this.shape,p:{x:25,y:10,rotation:7.8}}]},2).to({state:[{t:this.shape_7,p:{x:1.9,y:12,rotation:17.7}},{t:this.shape_6,p:{x:1.9,y:12,rotation:17.7}},{t:this.shape_5,p:{x:36,y:11.1,rotation:17.7}},{t:this.shape_4,p:{x:36.1,y:11.1,rotation:17.7}},{t:this.shape_3,p:{x:20.2,y:9.8,rotation:17.7}},{t:this.shape_2,p:{x:20.2,y:9.8,rotation:17.7}},{t:this.shape_1,p:{x:20.8,y:10.2,rotation:17.7}},{t:this.shape,p:{x:20,y:10,rotation:17.7}}]},2).to({state:[{t:this.shape_7,p:{x:-2.2,y:9.4,rotation:26.5}},{t:this.shape_6,p:{x:-2.2,y:9.4,rotation:26.5}},{t:this.shape_5,p:{x:31.6,y:13.7,rotation:26.5}},{t:this.shape_4,p:{x:31.7,y:13.7,rotation:26.5}},{t:this.shape_3,p:{x:16.2,y:10,rotation:26.5}},{t:this.shape_2,p:{x:16.2,y:10,rotation:26.5}},{t:this.shape_1,p:{x:16.8,y:10.5,rotation:26.5}},{t:this.shape,p:{x:16,y:10.1,rotation:26.5}}]},2).to({state:[{t:this.shape_7,p:{x:-2.1,y:13.1,rotation:20.5}},{t:this.shape_6,p:{x:-2.1,y:13.1,rotation:20.5}},{t:this.shape_5,p:{x:32,y:13.8,rotation:20.5}},{t:this.shape_4,p:{x:32.1,y:13.8,rotation:20.5}},{t:this.shape_3,p:{x:16.3,y:11.7,rotation:20.5}},{t:this.shape_2,p:{x:16.3,y:11.7,rotation:20.5}},{t:this.shape_1,p:{x:16.9,y:12.2,rotation:20.5}},{t:this.shape,p:{x:16.1,y:11.9,rotation:20.5}}]},2).to({state:[{t:this.shape_7,p:{x:-1.7,y:17.2,rotation:12.8}},{t:this.shape_6,p:{x:-1.7,y:17.2,rotation:12.8}},{t:this.shape_5,p:{x:32.1,y:13.4,rotation:12.8}},{t:this.shape_4,p:{x:32.3,y:13.4,rotation:12.8}},{t:this.shape_3,p:{x:16.3,y:13.5,rotation:12.8}},{t:this.shape_2,p:{x:16.3,y:13.5,rotation:12.8}},{t:this.shape_1,p:{x:17,y:13.8,rotation:12.8}},{t:this.shape,p:{x:16.2,y:13.7,rotation:12.8}}]},2).to({state:[{t:this.shape_7,p:{x:1.1,y:20.5,rotation:8.3}},{t:this.shape_6,p:{x:1.1,y:20.5,rotation:8.3}},{t:this.shape_5,p:{x:34.6,y:14.1,rotation:8.3}},{t:this.shape_4,p:{x:34.7,y:14.1,rotation:8.3}},{t:this.shape_3,p:{x:18.8,y:15.4,rotation:8.3}},{t:this.shape_2,p:{x:18.8,y:15.4,rotation:8.3}},{t:this.shape_1,p:{x:19.5,y:15.7,rotation:8.3}},{t:this.shape,p:{x:18.7,y:15.6,rotation:8.3}}]},2).to({state:[{t:this.shape_7,p:{x:2.9,y:20.1,rotation:15.1}},{t:this.shape_6,p:{x:2.9,y:20.1,rotation:15.1}},{t:this.shape_5,p:{x:36.8,y:17.6,rotation:15.1}},{t:this.shape_4,p:{x:37,y:17.6,rotation:15.1}},{t:this.shape_3,p:{x:21,y:17,rotation:15.1}},{t:this.shape_2,p:{x:21,y:17,rotation:15.1}},{t:this.shape_1,p:{x:21.7,y:17.4,rotation:15.1}},{t:this.shape,p:{x:20.9,y:17.2,rotation:15.1}}]},2).to({state:[{t:this.shape_7,p:{x:4.9,y:17.8,rotation:20}},{t:this.shape_6,p:{x:4.9,y:17.8,rotation:20}},{t:this.shape_5,p:{x:39,y:18.2,rotation:20}},{t:this.shape_4,p:{x:39.1,y:18.3,rotation:20}},{t:this.shape_3,p:{x:23.2,y:16.3,rotation:20}},{t:this.shape_2,p:{x:23.2,y:16.3,rotation:20}},{t:this.shape_1,p:{x:23.9,y:16.7,rotation:20}},{t:this.shape,p:{x:23.1,y:16.5,rotation:20}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-1,50.8,34.6);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(2);
	}
	this.frame_30 = function() {
		this.gotoAndPlay(2);
	}
	this.frame_57 = function() {
		this.gotoAndPlay(31);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1).call(this.frame_30).wait(27).call(this.frame_57).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A6F4F").s().p("AghBFQgegzAWhCIAPgaQAZgaAvgGIAGAwQgLgMgOgDQgbgGgSAqQgTAqAOA0QALAnAMALQgSgNgPgZg");
	this.shape.setTransform(18.7,11.1,1,1,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#704F3B").ss(0.9).p("AgJhoIALBNQALBUgEAs");
	this.shape_1.setTransform(26.1,15.5,1,1,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#704F3C").ss(0.3).p("AgOiPIAKgIQAMgHASgCIgDAIQAAAAAhAIQAmAMAXARIgKABIAWAdQAXAkAHAkIgFgEIABAmQgDAugXAiIgKACQgHALgRANQggAZgsAHQgrAIgogUIgfgVIgKABQgMgKgMgTQgZglgCgsIgEAFQAAgTAEgXQAIgwASgTIgLABIAXgWQAdgYAfgLQgDgGgCgBQgFgBAXABQAWABAJAGg");
	this.shape_2.setTransform(26.1,16.4,1,1,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E6449").s().p("Ag/CTIgfgVIgKAAQgMgJgMgTQgZglgCgtIgEAGQAAgUAEgXQAIgvASgUIgLACIAXgWQAdgZAfgLQgDgFgCgBQgFgCAXABQAWACAJAFIAKgHQAMgIASgBIgDAHIAhAJQAmALAXASIgKABIAWAcQAXAkAHAkIgFgDIABAmQgDAtgXAjIgKABQgHALgRANQggAZgsAIQgMACgLAAQgfAAgdgOg");
	this.shape_3.setTransform(26,16.4,1,1,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#030306").ss(0.3).p("AAlgyQgUgGgVABQgtADgOAlQgQAsAkARQAjARBRgM");
	this.shape_4.setTransform(8.1,9.4,1,1,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3FA8DF").s().p("AgtAuQgkgRAQgsQAOglAtgDQAVgBAUAGIAkBlQgiAFgaAAQgjAAgVgKg");
	this.shape_5.setTransform(8.3,9.5,1,1,28.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#030306").ss(0.3).p("Ag2gtIApgOQArgHAVAhQAaAngfAZQgfAYhSAG");
	this.shape_6.setTransform(43,25,1,1,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3FA8DF").s().p("AgzgtIAogOQAsgHAVAhQAZAngfAZQgfAYhRAGg");
	this.shape_7.setTransform(42.8,24.9,1,1,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AiACBQg2g2AAhLQAAhKA2g2QA1g2BLAAQBLAAA2A2QA2A2AABKQAABLg2A2Qg2A2hLgBQhLABg1g2gAhphpQgrAtgBA9QABA+ArAsQAuAtA9AAQA9AAAugtQAsgsAAg+QAAg9gsgtQgugrg9gBQg9ABguArg");
	this.shape_8.setTransform(25,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AicCdQhBhCAAhbQAAhbBBhBQBBhBBbAAQBcAABBBBQBBBBAABbQAABbhBBCQhBBBhcAAQhbAAhBhBgAh/iAQg2A2AABLQAABMA2A1QA3A3BKAAQBLAAA2g3QA2g1AAhMQAAhLg2g2Qg2g1hLAAQhKAAg3A1g");
	this.shape_9.setTransform(25,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AiHCIQg5g5AAhPQAAhOA5g5QA4g4BPAAQBPAAA5A4QA5A5gBBOQABBPg5A5Qg5A4hPAAQhPAAg4g4gAhuhuQgvAuAABBQAABBAvAvQAvAvBBAAQBAAAAwgvQAugvABhBQgBhBguguQgwguhAAAQhBAAgvAug");
	this.shape_10.setTransform(25,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("Ah7B8Qgzg0gBhIQABhIAzgzQAzg0BIAAQBJAAA0A0QAyAzAABIQAABIgyA0Qg0A0hJAAQhIAAgzg0gAhlhkQgqAqAAA7QAAA8AqAqQAsArA7AAQA6AAAsgrQAqgqAAg8QAAg7gqgqQgsgrg6AAQg7AAgsArg");
	this.shape_11.setTransform(25,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:42.8,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.1,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]}).to({state:[{t:this.shape_8},{t:this.shape_7,p:{x:42.8,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.1,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]},4).to({state:[{t:this.shape_9},{t:this.shape_7,p:{x:42.8,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.1,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]},2).to({state:[{t:this.shape_10},{t:this.shape_7,p:{x:42.8,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.1,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]},6).to({state:[{t:this.shape_11},{t:this.shape_7,p:{x:42.8,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.1,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]},2).to({state:[{t:this.shape_7,p:{x:42.8,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.1,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]},2).to({state:[{t:this.shape_7,p:{x:42.8,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.1,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]},13).to({state:[{t:this.shape_7,p:{x:42.8,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.1,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]},1).to({state:[{t:this.shape_7,p:{x:42.9,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:43.1,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:8.3,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:8.1,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:26,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:26.1,y:16.4}},{t:this.shape_1,p:{x:26.2,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:18.7,y:11.1}}]},1).to({state:[{t:this.shape_7,p:{x:42.3,rotation:23,y:23.2}},{t:this.shape_6,p:{x:42.5,rotation:23,y:23.3}},{t:this.shape_5,p:{rotation:23,x:6.3,y:11.4}},{t:this.shape_4,p:{rotation:23,x:6.2,y:11.3}},{t:this.shape_3,p:{rotation:23,x:24.7,y:16.5}},{t:this.shape_2,p:{rotation:23,x:24.8,y:16.5}},{t:this.shape_1,p:{x:24.7,rotation:23,y:15.6}},{t:this.shape,p:{rotation:23,x:16.9,y:11.9}}]},2).to({state:[{t:this.shape_7,p:{x:38.3,rotation:23,y:23.2}},{t:this.shape_6,p:{x:38.5,rotation:23,y:23.3}},{t:this.shape_5,p:{rotation:23,x:2.3,y:11.4}},{t:this.shape_4,p:{rotation:23,x:2.2,y:11.3}},{t:this.shape_3,p:{rotation:23,x:20.7,y:16.5}},{t:this.shape_2,p:{rotation:23,x:20.8,y:16.5}},{t:this.shape_1,p:{x:20.7,rotation:23,y:15.6}},{t:this.shape,p:{rotation:23,x:12.9,y:11.9}}]},2).to({state:[{t:this.shape_7,p:{x:40.1,rotation:16.2,y:21}},{t:this.shape_6,p:{x:40.3,rotation:16.2,y:21.1}},{t:this.shape_5,p:{rotation:16.2,x:3,y:13.5}},{t:this.shape_4,p:{rotation:16.2,x:2.8,y:13.4}},{t:this.shape_3,p:{rotation:16.2,x:21.8,y:16.3}},{t:this.shape_2,p:{rotation:16.2,x:21.9,y:16.3}},{t:this.shape_1,p:{x:21.7,rotation:16.2,y:15.5}},{t:this.shape,p:{rotation:16.2,x:13.5,y:12.7}}]},2).to({state:[{t:this.shape_7,p:{x:42.7,rotation:10.3,y:18.8}},{t:this.shape_6,p:{x:43,rotation:10.3,y:18.8}},{t:this.shape_5,p:{rotation:10.3,x:5.1,y:15.1}},{t:this.shape_4,p:{rotation:10.3,x:4.9,y:15.1}},{t:this.shape_3,p:{rotation:10.3,x:24.1,y:16.1}},{t:this.shape_2,p:{rotation:10.3,x:24.2,y:16}},{t:this.shape_1,p:{x:23.9,rotation:10.3,y:15.2}},{t:this.shape,p:{rotation:10.3,x:15.4,y:13.3}}]},2).to({state:[{t:this.shape_7,p:{x:45.7,rotation:10.3,y:18.8}},{t:this.shape_6,p:{x:45.9,rotation:10.3,y:18.8}},{t:this.shape_5,p:{rotation:10.3,x:8,y:15.1}},{t:this.shape_4,p:{rotation:10.3,x:7.8,y:15.1}},{t:this.shape_3,p:{rotation:10.3,x:27,y:16.1}},{t:this.shape_2,p:{rotation:10.3,x:27.1,y:16}},{t:this.shape_1,p:{x:26.9,rotation:10.3,y:15.2}},{t:this.shape,p:{rotation:10.3,x:18.4,y:13.3}}]},2).to({state:[{t:this.shape_7,p:{x:43.1,rotation:14.5,y:16.5}},{t:this.shape_6,p:{x:43.3,rotation:14.5,y:16.6}},{t:this.shape_5,p:{rotation:14.5,x:5.8,y:10.1}},{t:this.shape_4,p:{rotation:14.5,x:5.6,y:10}},{t:this.shape_3,p:{rotation:14.5,x:24.7,y:12.4}},{t:this.shape_2,p:{rotation:14.5,x:24.8,y:12.4}},{t:this.shape_1,p:{x:24.6,rotation:14.5,y:11.5}},{t:this.shape,p:{rotation:14.5,x:16.3,y:9.1}}]},2).to({state:[{t:this.shape_7,p:{x:39.8,rotation:9.3,y:12.7}},{t:this.shape_6,p:{x:40,rotation:9.3,y:12.7}},{t:this.shape_5,p:{rotation:9.3,x:2.1,y:9.7}},{t:this.shape_4,p:{rotation:9.3,x:1.9,y:9.6}},{t:this.shape_3,p:{rotation:9.3,x:21.1,y:10.3}},{t:this.shape_2,p:{rotation:9.3,x:21.2,y:10.2}},{t:this.shape_1,p:{x:20.9,rotation:9.3,y:9.4}},{t:this.shape,p:{rotation:9.3,x:12.4,y:7.7}}]},2).to({state:[{t:this.shape_7,p:{x:36.9,rotation:1.9,y:10.2}},{t:this.shape_6,p:{x:37.1,rotation:1.9,y:10.2}},{t:this.shape_5,p:{rotation:1.9,x:-0.9,y:12.1}},{t:this.shape_4,p:{rotation:1.9,x:-1.1,y:12.1}},{t:this.shape_3,p:{rotation:1.9,x:18,y:10.3}},{t:this.shape_2,p:{rotation:1.9,x:18.1,y:10.2}},{t:this.shape_1,p:{x:17.7,rotation:1.9,y:9.4}},{t:this.shape,p:{rotation:1.9,x:9.1,y:8.8}}]},2).to({state:[{t:this.shape_7,p:{x:35.7,rotation:1.9,y:11.7}},{t:this.shape_6,p:{x:35.9,rotation:1.9,y:11.7}},{t:this.shape_5,p:{rotation:1.9,x:-2.1,y:13.6}},{t:this.shape_4,p:{rotation:1.9,x:-2.3,y:13.6}},{t:this.shape_3,p:{rotation:1.9,x:16.8,y:11.8}},{t:this.shape_2,p:{rotation:1.9,x:16.9,y:11.7}},{t:this.shape_1,p:{x:16.5,rotation:1.9,y:10.9}},{t:this.shape,p:{rotation:1.9,x:7.9,y:10.3}}]},2).to({state:[{t:this.shape_7,p:{x:33.6,rotation:1.9,y:13.8}},{t:this.shape_6,p:{x:33.8,rotation:1.9,y:13.8}},{t:this.shape_5,p:{rotation:1.9,x:-4.2,y:15.7}},{t:this.shape_4,p:{rotation:1.9,x:-4.4,y:15.7}},{t:this.shape_3,p:{rotation:1.9,x:14.7,y:13.9}},{t:this.shape_2,p:{rotation:1.9,x:14.8,y:13.8}},{t:this.shape_1,p:{x:14.4,rotation:1.9,y:13}},{t:this.shape,p:{rotation:1.9,x:5.8,y:12.4}}]},2).to({state:[{t:this.shape_7,p:{x:37.1,rotation:6.3,y:17.2}},{t:this.shape_6,p:{x:37.3,rotation:6.3,y:17.2}},{t:this.shape_5,p:{rotation:6.3,x:-0.7,y:16.2}},{t:this.shape_4,p:{rotation:6.3,x:-0.9,y:16.1}},{t:this.shape_3,p:{rotation:6.3,x:18.3,y:15.8}},{t:this.shape_2,p:{rotation:6.3,x:18.4,y:15.7}},{t:this.shape_1,p:{x:18.1,rotation:6.3,y:14.9}},{t:this.shape,p:{rotation:6.3,x:9.5,y:13.7}}]},2).to({state:[{t:this.shape_7,p:{x:39.9,rotation:21.3,y:21.9}},{t:this.shape_6,p:{x:40.1,rotation:21.3,y:22}},{t:this.shape_5,p:{rotation:21.3,x:3.6,y:11.1}},{t:this.shape_4,p:{rotation:21.3,x:3.4,y:11}},{t:this.shape_3,p:{rotation:21.3,x:22.1,y:15.6}},{t:this.shape_2,p:{rotation:21.3,x:22.2,y:15.6}},{t:this.shape_1,p:{x:22.1,rotation:21.3,y:14.7}},{t:this.shape,p:{rotation:21.3,x:14.1,y:11.3}}]},2).to({state:[{t:this.shape_7,p:{x:41.7,rotation:28.7,y:24.9}},{t:this.shape_6,p:{x:41.9,rotation:28.7,y:25}},{t:this.shape_5,p:{rotation:28.7,x:7.2,y:9.5}},{t:this.shape_4,p:{rotation:28.7,x:7,y:9.4}},{t:this.shape_3,p:{rotation:28.7,x:24.9,y:16.4}},{t:this.shape_2,p:{rotation:28.7,x:25,y:16.4}},{t:this.shape_1,p:{x:25,rotation:28.7,y:15.5}},{t:this.shape,p:{rotation:28.7,x:17.6,y:11.1}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-1,50.1,34.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AggAGIAggGQADgBACgEQADACAKAAIANgCIACAAQgZALgZAAIgPAAg");
	this.shape.setTransform(1.9,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgEAVQABgIgDgGQACgBAEgFQAEgNAAgUIAAgBIABAAQAEAJgEAXQgEAXgHAMIACgNg");
	this.shape_1.setTransform(10.5,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAPAfQgbgXgIgiIAAgCIAEgEQAGANAKALQAGAIAEABIAEACIAAALQACAMAGAHQgFAAgCgCg");
	this.shape_2.setTransform(-8.6,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AAPAQQgHgBgGACQgCgGgJgIQgKgJgNgHIgBAAQADgFAIgDIABAAQATAGANAKIARANQAFAFABAIg");
	this.shape_3.setTransform(5.2,-8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgdAdQgCgFABgHIABgDQAAgGAGgIQAMgQAPgLIACgBIAPgBQAFAAAFADIgCACQgMAOgGAPIgCAHQgFAAgKAFIgUANIgBAAIgCgBg");
	this.shape_4.setTransform(-6.6,-6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAEAuIgvgXQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgMQACgVAEgTQACgFAEgBIAxgHQAEAAADAEQAKARALAaQACAEgDADIgNAPIgUATQgEADgCAAIgBAAg");
	this.shape_5.setTransform(1.7,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgEARIACgOIAHggIABAFIgFASIgDAOQgDANADADQABABgBAFQgDgEABgJg");
	this.shape_6.setTransform(-9.8,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgaACIAXgGQAWgGAIAFQABABgBAEQgGgCgJABIgPACIgXAIQgBgGABgBg");
	this.shape_7.setTransform(-0.7,-9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgHASIANgiIABgDQAAgBAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIAAgFQABAGgFAPQgEAOgHAOQgBgFABgCg");
	this.shape_8.setTransform(4.7,-4.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAAADIgQABIAAgFIAQgCIAJAAQAHAAABACQABABgBAEQgCgEgPADg");
	this.shape_9.setTransform(8.1,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgGAeIgRgJIgLgFQgEgDgDgFQgJgOACgMQACgGAFgDIANgEIARgEQAJgBAHAEIAcANQAJAFADAGQAAgBAAgBQAAAAAAAAQAAAAABABQAAAAAAABIAAABIgBgBIABABIAAABIgCgBQgHgCgRgKQgPgJgHgBQgKgCgYAJQgHACgCADQgCADACAHQADAKADADQAEAEAJAEIANAGIAMAGQAHAFAFgCQABAGgBAAIgDABQgFAAgJgGgAAuABIAAgHIAAgBIABADIACAWIAAAGQgDgNAAgKgAAugGIAAAAg");
	this.shape_10.setTransform(-2.4,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgBAAIgRgOQgBgBABgFIASAPQAOAMAFAIIgBAGQgDgGgQgPg");
	this.shape_11.setTransform(-3.8,-3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhKBSQgigfgCguQgCguAfghQAfgiAugCQAugCAhAfQAiAfACAvQACAsgfAiQgfAjguABIgFAAQgqAAgggdg");
	this.shape_12.setTransform(0,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(1,1,1).p("AA2ABQgEAKgMAHQgRAKgXAAQgRAAgOgFQgFgCgFgDQgRgKAAgOQAAgOARgKQARgKAYAAQAXAAARAKQARAKAAAOQAAAEgBADQAHAGAAAIQAAALgPAIQgNAHgVAAQgTAAgOgHQgJgFgDgG");
	this.shape_13.setTransform(0.7,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgUAiQgKgFgCgGIgLgFQgQgKAAgOQAAgOAQgKQARgKAYAAQAXAAAQAKQASAKgBAOIgBAHQAIAGAAAIQgBALgOAIQgOAHgTAAQgUAAgNgHgAgCAcQAXAAAQgKQAMgHAEgKQgEAKgMAHQgQAKgXAAQgRAAgNgFQANAFARAAg");
	this.shape_14.setTransform(0.7,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-11.2,22.3,22.5);


(lib.blackScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.718)").s().p("EhwFA6DMAAAh0FMDgLAAAMAAAB0Fg");
	this.shape.setTransform(717.4,401.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackScreen, new cjs.Rectangle(0,29.8,1434.8,743), null);


(lib.wrongMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC2227").s().p("AkzGKIDNlnIi5iBIBBhSICsB3ICtlkIB2ATQhvDCg0BcQggA7AKAxQAIAvAsAkQCBBoBHBfIgaAgIkrjNIkJExg");
	this.shape.setTransform(11.6,15.6,0.376,0.376);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wrongMC, new cjs.Rectangle(0,0,23.1,31.1), null);


(lib.rightMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#168943").s().p("AkTEeQgPgThdh1QA0g2AigIQAtgLAwA2QAfAjAdgRQASgKAdgrICEjIQBMhwA+hVQBXh3B8AqQgQAjgKAOIjIEoQh2CvhIB9QhEB2gtAFIgEAAQgvAAhPhog");
	this.shape.setTransform(14.8,14.9,0.384,0.384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightMC, new cjs.Rectangle(0,0,29.5,29.9), null);


(lib.Xzoom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAFA").s().p("EAbWAoAQh4gUhwhPQhLg0hyh1QkIkJl6l7IqEqDIgygwIgTAcQgLAPgJAJI1bVbQh1B1iGApIhRAWIiWAAIhJgWQgtgNgbgMQhmgriiiiQiiiigrhlQgLgbgNgoIgWhEIAAiqIAFgGQADgDAAgCQAdiqCRiPIVd1fIAtgtQgkgdgOgOIqBqBQl3l4kLkIQhzhyg1hLQhPhwgUh4IAAiWIAuiAQAbhMAignQCnjFBHg9QCUiCCngdICWAAQB3AUBvBOQBKA1BxBwQD4D7GLGLIKFKFQAIAIALASIAUAkIAegnQAMgRAJgHIVk1mQB4h4CdgnIAlgMICqAAQBaAcARAGQB3AsCtCtQCtCtArB2IASA2IARA2IAACgQgVB4hQByQg0BJh2B1Qj4D1mKGLIqBKBQgJAJgPAIIgbAPIADAYIAZAQQAQAJAIAJIViVhQCHCHAeCmQABADAEAFIAFAIIAACgQgvDPiBB5QgSASg/BAQgxA0giAbQhPBAh7BHQgVAMgkAJQgpAJgUAGg");
	this.shape.setTransform(12,12,0.047,0.047);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Xzoom, new cjs.Rectangle(0,0,24,24), null);


(lib.startGameBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbAuIgCgBIgBgDIAAgvQgBgbgaAAIgeAAIgDgBIAAgDIAAgFIAAgDIADgBIAfAAQAnAAAAAoIAAAvIgBADIgCABgAghAuIgDgBIAAgDIAAg1IAAgCIADgBIAHAAIACABQABAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIAAA1IgCADIgCABg");
	this.shape.setTransform(130.1,26.8,1.47,1.47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgAuIgCgBIgBgDIAAgvQgBgbgbAAIgLAAIgCBKIgBADIgCABIgXgBIgDgBIAAgCIAAgFIAAgDIADgBIANAAIAAgyIADgPIgKAAIgCgBIgBgDIAAgFIABgDIACgBIAiAAQAoAAAAAnIAAAwIgBADIgCABg");
	this.shape_1.setTransform(114.8,26.8,1.47,1.47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbAuIgCgBIgBgDIAAgvQAAgbgbAAIgUAAIAABKIgBADIgCABIgHAAIgDgBIgBgDIAAhTIABgDIADgBIAfAAQATAAALAKQAKAKAAAUIAAAvIgBADIgDABg");
	this.shape_2.setTransform(100,26.8,1.47,1.47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA5IgCgBIgBgBIAAgIQAAgDADgBIAGgDQAKgDAGgJQAGgHAAgQQAAgKgCgFQgCgGgHgDQgFgDgKAAIgUAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgcQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBAAAAIAHAAIACACIABACIAAATIAMAAQANAAAKADQAIAFAEAJQAEAJAAAPQAAATgKAMQgLAMgPAFIgGACg");
	this.shape_3.setTransform(86.6,25.3,1.47,1.47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAuIgDgBIgBgDIAAgFIABgDIADgBIAdAAIAAgmQAAgMgFgHQgHgIgJAAIgQAAIgMBKIgCADIgDABIgGAAIgDgBIgBgDIANhKIgIAAIgDgBIgBgDIAAgFIABgDIADgBIAnAAQALAAAHAFQAJAFADAJQAEAIABAMIAAAwIgBADIgDABg");
	this.shape_4.setTransform(67.5,26.8,1.47,1.47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAuQgKAAgIgFQgJgEgEgJQgFgIAAgMIAAgxIABgDIACgBIAHAAIACABIABADIABAsQAOgBAGgGQAGgHAAgKIAAgUIABgDIACgBIAGAAIACABIABADIAAAUQAAAQgIAIQgKALgTAAQADAKAHAFQAHAFAJAAIAEAAQAPAAAJgJQAJgKAAgOIAAgqIABgDIACgBIAGAAIADABIABADIAAArQAAANgFALQgHAKgJAFQgKAFgNAAg");
	this.shape_5.setTransform(52.2,26.9,1.47,1.47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcAuIgEgBIgBgDIAAgvQABgbgbAAIgTAAIAABKIgBADIgDABIgHAAIgDgBIgBgDIAAhTIABgDIADgBIAfAAQATAAALAKQAJAKABAUIAAAvIgBADIgDABg");
	this.shape_6.setTransform(36.6,26.8,1.47,1.47);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghA9IgEgBIgBgCIAAhUIABgCIAEgBIAGAAIADABIABACIAABUIgBACIgDABgAgEAgIgCgBIgBgCIAAgHQAAgDADgCIAGgCQAKgDAHgJQAFgGAAgQQABgKgDgHQgDgGgGgDQgFgCgKAAIgfAAIgEgBIgBgDIAAgFIABgDIAEgBIAhAAQANAAAJAEQAKAFADAIQADAJABAQQgBATgJAMQgKALgQAFIgHADg");
	this.shape_7.setTransform(22,29.1,1.47,1.47);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#92CE86").s().p("Am8CtQgcAAgSgUQgUgTAAgbIABjXQAAgbATgTQAUgUAbABIN5ABQAbAAATAUQATATAAAbIAADXQAAAbgUATQgTAUgbAAg");
	this.shape_8.setTransform(75.1,25.7,1.47,1.47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7CB772").s().p("AnJCtQgWAAgQgQQgPgPAAgWIABjxQAAgWAPgPQAQgQAVAAIOTACQAWAAAPAPQAQAQAAAWIAADxQAAAWgQAPQgPAQgXAAg");
	this.shape_9.setTransform(75.1,28.4,1.47,1.47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.3,54.1);


(lib.restartBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agxg1IAOAAIAHA1QAHgDAGgGQAFgGACgHQACgHABgMIAAgLIANAAIAAALQgCAWgGALQgIALgTAIIADAeQAdgCAPgQQAPgRABgfIAAgcIAOAAIAAAbQAAAogWAUQgUATgsABg");
	this.shape.setTransform(78.8,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA1IAAhDQABgNgGgHQgFgGgKAAIgfAAIAABdIgPAAIAAhpIAxAAQAQAAAIAKQAIAJAAATIAABDg");
	this.shape_1.setTransform(67.4,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBIIAAhbIADgNIAMAAIAABogAgKAWQAKgBAGgEQAHgDAEgJQAFgJABgPIADgoIhDAAIAAgMIBTAAIgDAxQgCAbgNAOQgNAOgTABg");
	this.shape_2.setTransform(57,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFA1IAAhSIgDgXIAOAAIADAXIAABSg");
	this.shape_3.setTransform(49.5,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Agxg1IAOAAIAGA1QAIgDAGgGQAEgFACgIQADgHAAgMIAAgLIANAAIAAALQgBAWgGALQgIALgTAIIAEAeQAcgCAQgQQAPgRgBgfIAAgcIAPAAIAAAbQAAAogWAUQgUATgsABg");
	this.shape_4.setTransform(37.6,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFA1IAAhSIgDgXIAOAAIADAXIAABSg");
	this.shape_5.setTransform(29.5,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA1IAAgMIA1AAIAAg6QAAgNgFgFQgGgFgIAAIgiAAIAAgMIAlAAQAfAAAAAkIAAA5IANAAIAAAMg");
	this.shape_6.setTransform(22.5,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#92CE86").s().p("Am8CtQgbAAgUgUQgTgTAAgbIAAjXQABgbATgTQATgUAbABIN5ABQAbAAAUAUQATATAAAbIgBDXQAAAbgTATQgTAUgcAAg");
	this.shape_7.setTransform(51.1,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7CB772").s().p("AnJCtQgWgBgQgPQgPgQAAgVIAAjxQAAgWAQgPQAQgQAVAAIOTACQAWAAAPAQQAQAPAAAWIgBDxQAAAVgPAQQgQAPgWAAg");
	this.shape_8.setTransform(51.1,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.restartBtn, new cjs.Rectangle(0,0,102.2,36.8), null);


(lib.radioBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ABDAAQAAAcgUATQgTATgcAAQgbAAgTgTQgUgTAAgcQAAgaAUgUQATgTAbAAQAcAAATATQAUAUAAAag");
	this.shape.setTransform(0.2,0.3,1,1,0,0,0,-7,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAyQgVgUAAgeQAAgdAVgUQAUgVAdAAQAeAAAUAVQAVAUAAAdQAAAegVAUQgUAVgeAAQgdAAgUgVg");
	this.shape_1.setTransform(7,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6DF7C9").s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_2.setTransform(3.3,3.2,0.238,0.238,0,0,0,-15.8,-16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC99").s().p("AgYAZQgLgKAAgPQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_3.setTransform(7.1,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBGQgWgEgQgQQgVgUAAgeQAAgdAVgUQAUgVAdAAQAeAAAUAVQAVAUAAAdQAAAegVAUQgQAQgVAEIgNABIgLgBg");
	this.shape_4.setTransform(7,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7CB772").s().p("AgYAZQgLgKAAgPQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_5.setTransform(7.1,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,15.3,16.2);


(lib.finishBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agrg1IAzAAQARABAJAJQAKAMAAARIAAAGQACA6hMAEgAgRAoQAVgCANgLQAOgLgCgZIAAgEQAAgMgGgJQgGgHgKAAIgiAAg");
	this.shape.setTransform(60.8,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFgKIgDgWIAOAAIADAWIgBAoIgNADg");
	this.shape_1.setTransform(53.3,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFA1IAAhSIgDgXIAOAAIADAXIAABSg");
	this.shape_2.setTransform(49.1,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA1IAAhoIAzAAQAfgBABAkIAABFgAgaApIA1AAIAAg6QgBgMgFgGQgFgFgKAAIggAAg");
	this.shape_3.setTransform(41.6,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#92CE86").s().p("Am8CtQgbAAgTgTQgUgUAAgbIABjXQAAgbATgTQATgUAbAAIN6ACQAaAAAUAUQATATAAAbIgBDXQAAAbgTATQgTATgcAAg");
	this.shape_4.setTransform(51.1,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7CB772").s().p("AnJCtQgWAAgQgQQgPgPAAgWIABjxQAAgVAPgQQAQgQAVAAIOTACQAWAAAQAQQAPAPAAAWIgBDxQAAAWgPAPQgQAQgVAAg");
	this.shape_5.setTransform(51.1,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.finishBtn, new cjs.Rectangle(0,0,102.2,36.9), null);


(lib.checkBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA0IAAgMIA6AAIAAg5QAAgMgFgFQgHgGgIAAIgmAAIAAgLIApAAQAhABAAAiIAAA4IAOAAIAAAMg");
	this.shape.setTransform(64.6,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIA0IAAhFQAAgPAFgHIg4AAIAAgMIBXAAIAAAMIgPAAQgFAHAAAPIgBBFg");
	this.shape_1.setTransform(53.6,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA0IAAhRIgCgWIAOAAIADAWIAABRg");
	this.shape_2.setTransform(45.8,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBHIAAhaIACgNIAOAAIAABngAgLAWQALgBAGgEQAIgDAFgJQAEgIACgQIADgnIhIAAIAAgMIBZABIgEAvQgBAbgOAOQgOAOgVAAg");
	this.shape_3.setTransform(38,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#92CE86").s().p("Am8CtQgbAAgTgTQgUgUAAgbIABjXQAAgbATgTQATgUAbAAIN6ACQAaAAAUAUQATATAAAbIgBDXQAAAbgTATQgTATgcAAg");
	this.shape_4.setTransform(51.1,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7CB772").s().p("AnJCtQgWAAgQgQQgPgPAAgWIABjxQAAgVAPgQQAQgQAVAAIOTACQAWAAAQAQQAPAPAAAWIgBDxQAAAWgPAPQgQAQgVAAg");
	this.shape_5.setTransform(51.1,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.checkBtn, new cjs.Rectangle(0,0,102.2,36.9), null);


(lib.onOffAudio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(0.1).p("AgDAYIgGgJQALgEAAgLQAAgMgLgEIAFgIQABgBACAAQALAHADANQABAIgEAIQgDAIgHAEg");
	this.shape.setTransform(17.3,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAQQAMgEAAgMQgBgLgLgEIAGgIQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAMAHACANQACAIgEAIQgEAIgHAEIgCABg");
	this.shape_1.setTransform(17.4,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.1).p("AgKA1IgGgJQAZgPAAgcQAAgbgZgQIAGgJQAaAQADAdQADASgJARQgIAPgPAJg");
	this.shape_2.setTransform(19.9,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAsQAZgQAAgcQAAgagZgRIAGgIQAaAPAEAdQACATgIAQQgJAPgPAKg");
	this.shape_3.setTransform(20,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(0.1).p("AgSBQIgGgIQAogbAAgsQAAgsgogaIAGgJQASALAMATQANAVACAYQABAbgOAYQgNAVgTALg");
	this.shape_4.setTransform(22.5,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZBHQAogaAAgtQAAgsgogaIAGgJQATALALATQANAVACAYQABAbgOAYQgNAVgTALg");
	this.shape_5.setTransform(22.6,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(0.1).p("AgSAmIAAhLIgmAAQgGAAAAAFIAABBIABABQABAEAEAAgABKhvIAADfQAAAIgHAEQgIAFgHgHIhDhJIgsAAQgMgCgBgLIgBgEIAAg/QAAgIAGgFQAFgEAFAAIApAAIACgBIBBhHQAEgFAGAAQAKAAACAKgAA/BwIAAjgQAAgBgBgBQgBAAgBAAIgCACIhABGIgBACIAABPQAAACABACIBBBHQABABACgBQABAAAAgCg");
	this.shape_6.setTransform(7.4,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA0B6IhDhJIgsAAQgMgCgBgLIgBgEIAAg/QAAgIAGgFQAFgEAFAAIApAAIACgBIBBhHQAEgFAGAAQAKAAACAKIABAEIAADfQAAAIgHAEQgEACgDAAQgEAAgEgEgAA8hyIgCACIhABGIgBACIAABPIABAEIBBBHQAAAAABAAQAAAAAAABQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAjgIgBgCIgBAAIgBAAgAg+ggIAABBIABABQABAEAEAAIAmAAIAAhLIgmAAQgGAAAAAFg");
	this.shape_7.setTransform(7.4,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(0.1).p("ABKhvIAADfQAAAIgHAEQgIAFgHgHIhDhJIgsAAQgMgCgBgLIgBgEIAAg/QAAgIAGgFQAFgEAFAAIApAAIACgBIBBhHQAEgFAGAAQAKAAACAKgAgSAmIAAhLIgmAAQgGAAAAAFIAABBIABABQABAEAEAAgAA/BwIAAjgQAAgBgBgBQgBAAgBAAIgCACIhABGIgBACIAABPQAAACABACIBBBHQABABACgBQABAAAAgCg");
	this.shape_8.setTransform(7.4,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27.2,27.2);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgbrAv9QgtAAgfggQgggfAAgtMAAAhchQAAgtAggfQAfggAtAAMA3XAAAQAtAAAfAgQAgAfAAAtMAAABchQAAAtggAfQgfAggtAAg");
	mask_2.setTransform(188,306.9);

	// Layer 3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.5).p("AFAAAQAACFheBdQheBeiEAAQiEAAhdheQhehdAAiFQAAiEBehdQBdhdCEAAQCEAABeBdQBeBdAACEg");
	this.shape_33.setTransform(188.1,306.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.6).p("A6CAAMA0FAAA");
	this.shape_34.setTransform(188,306.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(0.6).p("EAaEAp/Mg0HAAAMAAAhT9MA0HAAAg");
	this.shape_35.setTransform(188,306.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.1).p("AGgAAIs/AB");
	this.shape_36.setTransform(184.3,34.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.1).p("AGgAAIs/AB");
	this.shape_37.setTransform(184.3,32.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2).p("AGgAAIs/AB");
	this.shape_38.setTransform(184.3,29.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.2).p("AGgAAIs/AB");
	this.shape_39.setTransform(184.3,23.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.1).p("AGgAAIs/AB");
	this.shape_40.setTransform(184.3,26.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.2).p("AGgAAIs/AB");
	this.shape_41.setTransform(184.3,21);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2).p("AGhAAItBAB");
	this.shape_42.setTransform(184.3,15.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(0.1).p("AGeAAIs7AB");
	this.shape_43.setTransform(184.5,18.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_44.setTransform(221.1,25.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh4IAADx");
	this.shape_45.setTransform(223.8,25.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh2IAADu");
	this.shape_46.setTransform(218.3,25.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_47.setTransform(212.9,25.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh5IAADz");
	this.shape_48.setTransform(215.6,25.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_49.setTransform(210.2,25.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_50.setTransform(204.9,25.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADu");
	this.shape_51.setTransform(207.6,25.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_52.setTransform(202.2,25.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_53.setTransform(196.8,25.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_54.setTransform(199.5,25.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADu");
	this.shape_55.setTransform(194,25.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_56.setTransform(188.6,25.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.2).p("AAAh5IAADz");
	this.shape_57.setTransform(191.4,25.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADu");
	this.shape_58.setTransform(185.9,25.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_59.setTransform(180.5,25.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh5IAADy");
	this.shape_60.setTransform(183.1,25.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_61.setTransform(177.7,25.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_62.setTransform(172.4,25.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh2IAADu");
	this.shape_63.setTransform(175.1,25.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_64.setTransform(169.6,25.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_65.setTransform(164.2,25.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_66.setTransform(166.9,25.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_67.setTransform(161.5,25.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_68.setTransform(156.1,25.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh5IAADz");
	this.shape_69.setTransform(158.7,25.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh2IAADu");
	this.shape_70.setTransform(153.3,25.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_71.setTransform(147.9,25.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh4IAADx");
	this.shape_72.setTransform(150.6,25.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(0.1).p("AAAh3IAADv");
	this.shape_73.setTransform(145.2,25.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(0.6).p("AGfB4Is8ADIgBjyIM8gDg");
	this.shape_74.setTransform(184.3,25.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(0.6).p("AkwhqIANAgQASAnAcAhQBZBoCXADQCXACBehrQAvg1ARg3");
	this.shape_75.setTransform(187.9,152.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(0.6).p("AS2oAMglrAAAIAAQBMAlrAAAg");
	this.shape_76.setTransform(184.3,89.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(0.6).p("AIni8IxOADIAAF1IRPgDg");
	this.shape_77.setTransform(184.3,57.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgfAAIgfg/IAAgHIB9AAIAACNQg1gFgphCg");
	this.shape_78.setTransform(348.5,45.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("Ag+hGIB9AAIAAAHQgLAfgUAgQgpBCg1AFg");
	this.shape_79.setTransform(27.5,45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(0.1).p("AGgABIs/gB");
	this.shape_80.setTransform(184.3,578.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(0.1).p("AGgABIs/gB");
	this.shape_81.setTransform(184.3,581.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(0.2).p("AGgABIs/gB");
	this.shape_82.setTransform(184.3,584.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(0.2).p("AGgABIs/gB");
	this.shape_83.setTransform(184.3,590);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(0.1).p("AGgABIs/gB");
	this.shape_84.setTransform(184.3,587.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(0.2).p("AGgABIs/gB");
	this.shape_85.setTransform(184.3,592.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(0.2).p("AGhABItBgB");
	this.shape_86.setTransform(184.3,598.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(0.1).p("AGeABIs7gB");
	this.shape_87.setTransform(184.5,595.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAju");
	this.shape_88.setTransform(221.1,588.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB5IAAjx");
	this.shape_89.setTransform(223.8,588.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_90.setTransform(218.3,588.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_91.setTransform(212.9,588.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB6IAAjz");
	this.shape_92.setTransform(215.6,588.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB3IAAju");
	this.shape_93.setTransform(210.2,588.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_94.setTransform(204.9,588.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAju");
	this.shape_95.setTransform(207.6,588.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB3IAAju");
	this.shape_96.setTransform(202.2,588.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAju");
	this.shape_97.setTransform(196.8,588.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAju");
	this.shape_98.setTransform(199.5,588.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_99.setTransform(194,588.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_100.setTransform(188.6,588.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(0.2).p("AAAB6IAAjz");
	this.shape_101.setTransform(191.4,588.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_102.setTransform(185.9,588.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB3IAAju");
	this.shape_103.setTransform(180.5,588.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB6IAAjz");
	this.shape_104.setTransform(183.1,588.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB3IAAju");
	this.shape_105.setTransform(177.7,588.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAju");
	this.shape_106.setTransform(172.4,588.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_107.setTransform(175.1,588.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAju");
	this.shape_108.setTransform(169.6,588.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_109.setTransform(164.2,588);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB3IAAju");
	this.shape_110.setTransform(166.9,588.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_111.setTransform(161.5,588.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_112.setTransform(156.1,588.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB6IAAjz");
	this.shape_113.setTransform(158.7,588.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAjv");
	this.shape_114.setTransform(153.3,588.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAju");
	this.shape_115.setTransform(147.9,588.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB5IAAjx");
	this.shape_116.setTransform(150.6,588.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(0.1).p("AAAB4IAAju");
	this.shape_117.setTransform(145.2,588.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(0.6).p("AGfh3Is8gDIgBDzIM8ACg");
	this.shape_118.setTransform(184.3,588.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(0.6).p("AkvBrQAOg0Atg0QBZhoCXgDQCWgCBfBrQAvA1ARA3");
	this.shape_119.setTransform(187.9,462.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(0.6).p("AS2IEMglsgAHIABwAMAlrAAHg");
	this.shape_120.setTransform(184.3,523.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(0.6).p("AInC9IxOgDIAAl1IRPADg");
	this.shape_121.setTransform(184.3,557);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("Ag+BGIAAgGQALggAUggQAphBA1gFIAACNg");
	this.shape_122.setTransform(348.5,568.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("Ag+BHIAAiNQA1AFApBBQAUAhALAfIAAAHg");
	this.shape_123.setTransform(27.5,568.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#91CC89").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_124.setTransform(188,592.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#91CC89").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_125.setTransform(188,508);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7CB772").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_126.setTransform(188,550.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#91CC89").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_127.setTransform(188,428.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7CB772").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_128.setTransform(188,470.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#91CC89").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_129.setTransform(188,346.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7CB772").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_130.setTransform(188,388.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#91CC89").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_131.setTransform(188,267.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7CB772").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_132.setTransform(188,309.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#91CC89").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_133.setTransform(188,185.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7CB772").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_134.setTransform(188,227.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#91CC89").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_135.setTransform(188,103.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#7CB772").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_136.setTransform(188,145.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#91CC89").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_137.setTransform(188,21.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#7CB772").s().p("A9XDWIAAmrMA6vAAAIAAGrg");
	this.shape_138.setTransform(188,63.6);

	var maskedShapeInstanceList = [this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,376,613.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(40.9,41.5,3.686,3.686);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhvAvQgvgUAAgbQAAgaAvgVQAugTBBAAQBBAAAvATQAvAVAAAaQAAAbgvAUQgvAUhBABQhBgBgugUg");
	this.shape.setTransform(42.4,54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.1,0,82.1,82.9), null);


(lib.Wink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59473D").ss(6.2).p("Ar5C6QB7hkClhfQFJi/DOAYQE4AjCNAnQDSA6AmBm");
	this.shape.setTransform(200.7,3.4,0.778,0.778,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AhqBrQgtgsAAg/QAAg+AtgsQAtgsA9AAQA/AAAtAsQArAsABA+QgBA/grAsQgtAsg/AAQg9AAgtgsg");
	this.shape_1.setTransform(203,17.3,0.778,0.778,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4766AE").s().p("AAVENQjTgEhAgoQhCgqAAiEQAAiDBfheQBeheCDAAQCFAABdBeQBfBeAACDQgBBIgIAmQgLAsgeAXQgzApirAAIgcAAg");
	this.shape_2.setTransform(203,16.2,0.778,0.778,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AsnDwQgHg0AahDQAWg6AigqQAwg7DhiCQBwhBBng2QErhdE0A/QDtAxCSBtQA1AoAJBBQAHA6gdA/QgcA9gxAmQg0Aog2gEQh1gIlyAoQmAAqkSA2Qg/ANgxAAQiLAAgOhng");
	this.shape_3.setTransform(203,16.3,0.778,0.778,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#765949").s().p("AqcCoQhZgGCRhOQA6gfBug9QBkg0BlgeQEIhSHdAFIDNCAQi5gmj5AHQnxAMlCDZQg7AKgpAAIgSgBg");
	this.shape_4.setTransform(205.4,-14.8,0.778,0.778,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4BB94").s().p("AtqJxIAAzhIbVAAIAAThg");
	this.shape_5.setTransform(202.5,28.6);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(265.7,84.7,1,1,0,0,0,413.1,525.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.4,-441,826.1,1051.5);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Wink();
	this.instance_1.parent = this;
	this.instance_1.setTransform(366.9,469.5,1,1,0,0,0,265.6,84.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF9FB").s().p("EhR0AfxMgABg8+QgHgmAMgmQAZhMBjAAMCe+gALQAMgBARADQAjAHAcAVQBaBDgJC+QgJC+AFcPQACOIAENiIkSAAMgABg4OQAVghgDggQgIg/h+AKUgB+AALhKwAABUglZAAAgk/gABIgXgCQgbACgWAPQhIAuAACfMAABA2og");
	this.shape_1.setTransform(982,-360);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("Ah7heIAcAYQARAOAMAJQAYARApAZQARAKAUgEQADAOAJANQAIAIANANQAIAIAqAhIAFAFQibg3hciGg");
	this.shape_2.setTransform(1408.9,-185.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AhTA1QAcgWALgbQAJADAMgCQAGAAAPgFQBBgXBDg8IAFgFIACAAQgUAtheA8QheA9hBAKQAkgWARgNg");
	this.shape_3.setTransform(1464.9,-183.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("Ag7CMQgGinBZiIQADgFAHgBIAWgBIAEACQgXA6gKBKQgFAqAGAYIAFASQgQAIgUAdQgeArgMAqQgOgQAAgOg");
	this.shape_4.setTransform(1393,-236.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AAYCeQgWgsgLgVQgRgdgcgQQALgRADgYQACgOgBgcQgBhBgRhDIgBgGQAbABAfAPIADAGQAmBMAMBTQAHAugCA3QgCAggYAhg");
	this.shape_5.setTransform(1484.2,-233.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgoA4QgMgHgYgHIhsggQgHgCAAgCQgCgCAEgFQAIgQAdgXIAOgKQAWgRAwgGQBdgLBYAVQAGABACACIAzAvQARARADAaIgJABQhXAEhKAbIgfAQQgLgNgUgJg");
	this.shape_6.setTransform(1439.1,-268.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AhzDLQgJgBgIgDQgLgFgCgGIgyibIgXhTQgCgIAFgFQAcgYAPgLQBMg5BWgzQAKgGAJAAQAJAAAKAIIBsBUQAZAVAvArQAQAOgHAUQgkBwguBkQgJAUgWAAIhbADg");
	this.shape_7.setTransform(1436.8,-215.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AhsA6QAFgYAmgZIA7ghQA6ghA3gaIACAOQACAOgEABQgwAXgyAcIhCAjQgtAbgEAZQgDgUABgGg");
	this.shape_8.setTransform(1409.6,-259.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AA3AfQgOgMgyggQgxgegpgUQgDgCACgNIABgOQA3AbAwAgQAqAcARAOQAgAdAGAeQACAFgDAUQgGgfgngfgAhjhcIAAAAIAAAAg");
	this.shape_9.setTransform(1468.1,-257);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AhiAcIBcggQAkgMAVgHQAmgQALgRIABAMQACAMgCAEQgLARgjAOQgUAHgiAMQg0ATgvAQQgFgcAFgBg");
	this.shape_10.setTransform(1468.5,-223);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AA2A9QgCgLACgEIgEANIABACQACACgBAEQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgDAAADgLIgEgFQgGgIgKgKQgRgTgSgRQgbgYgXgTQgDgDACgMQACgNgBgBQApAiAjAkQAWAVAHAMQAMAVgHAVIgBgMg");
	this.shape_11.setTransform(1454.7,-188.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("ABND2IAAAAIAAAAgABMDqQgCgMACgEIAggtQATgaASgOIAVgLQAFAOgFgTQgNg1gGgSIgQgwIgQgxIgHgdQgFgRgHgJQgMgRgegUIgwgfIgrgdQgfgQgTAFQgYAHgTAmQgKATgPAlIgHgKIAFgPQAQgsAMgUQAXgoAbgDQAZgCApAbQAWAPAjAdIAnAcQASARAGAWQAFATAeBXQAWBAAGArQACATgBAHQAAAOgHAHQgDADgJAFQgKAGgDADQgKAKgWAbIgeApIgBgMgAhwBiIgQg+IgTg+QgLglgFgbQgCgOACgOIACAEIAEAIIgFAMIAIAAIADASQARBCASA3IAMAqQAKAdAMAGQAEABgCAOIgCAOQgRgIgNgtgAiaheIgDgMIABgDIABgEIADAEQAKANgMACIAAAAgAijh2QgQgcARAXIgBAFIAAAAg");
	this.shape_12.setTransform(1404.6,-208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgGB5QgCgLACgEQAMgrgChBIgFhuIABgQQAAgKABALIAHCDQABBPgOAzIgBgNg");
	this.shape_13.setTransform(1437.9,-248);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBAAQAAgOABAAQACAAAAAOQAAAOgCAAQgBAAAAgOg");
	this.shape_14.setTransform(1396.2,-252.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AltFuQiYiXAAjXQAAjWCYiXQCYiYDWAAQDWAACYCYQCXCYAADVQAADXiYCYQiXCXjXAAQjWAAiXiYg");
	this.shape_15.setTransform(1438.3,-224.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C8A87C").s().p("AmNDwQgOg2gChAQgEh/A5hOQA4hOAmgmIAagXQBvBJAgARQAIAIAMAIQAYAQASACQBAAFAYgLQAUgKBDg7QBKhBgBgRQgBgQAEAKIAFAOQAqAYArAqQBWBSAIBTQANCFABBsQgxAVAAADQADgNADgeQAGg+gIgLIgRgiQgLgXgKgDQgKgDgCgoQgEgugGgLQgWgmg6gXQhSghhSA2IgoAIQgwAFgwgQQhCgVgpAEQgfADgOAQQgCADgTAMQgTAMgMAOQgnArAGBRIgVA0QgRBAAQA1QhDgRAAgJg");
	this.shape_16.setTransform(937.7,-343.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#59473D").ss(0.6).p("AFwEAQADgOAEgbQAMhJgIgLQgDgEgPgfQgLgXgKgEQgKgDgDgpQgEgvgGgLQgWgmg7gYQhUgihVA3IgoAIQgxAGgxgRQhDgWgrAFQggADgOAQQgCADgTAMQgTANgNAOQgoAsAGBSIgTA6QgQBFAQA3QhEgSAAgIQgOg6gDhEQgGiGA5hQQA6hPAmgnIAbgXQByBLAgAQQAJAIAMAJQAYARATABQA/AGAagMQAUgJBFg9QBMhDgBgRQgBgRAFALQACAGACAIQArAZAsAqQBYBUAIBWQANCHgEB7IgcAHQgQAGgHAGQgGAGAAAGQAAASAGgeg");
	this.shape_17.setTransform(937.8,-344.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C8A87C").s().p("AFqENQAAgGAGgGIAHgpQAMhJgIgLQgDgEgPgfQgLgXgKgEQgKgDgDgpQgEgvgGgLQgWgmg7gYQhUgihVA3IgoAIQgxAGgxgRQhDgWgrAFQggADgOAQQgCADgTAMQgTANgNAOQgoAsAGBSIgTA6QgQBFAQA3QhEgSAAgIQgOg6gDhEQgGiGA5hQQA6hPAmgnIAbgXQByBLAgAQQAJAIAMAJQAYARATABQA/AGAagMQAUgJBFg9QBMhDgBgRQgBgRAFALIAEAOQArAZAsAqQBYBUAIBWQANCHgEB7IgcAHQgQAGgHAGQgEATgBAAQgBAAAAgHg");
	this.shape_18.setTransform(937.8,-344.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#59473D").s().p("AAPAsQgDgUgGgYQgEgUgHgZIgOgsQAKATAJAYQAGATAHAZQAGAdABAQQABAcgFATQABgTgCgbg");
	this.shape_19.setTransform(951.7,-377.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#59473D").s().p("AAACtIABgYIABgyQAAghgChBIgChiIgDhiQADAfAEBDIAFBhQACA7gCAoIgDAyIgEAYQgCAQgFAHQAEgGADgRg");
	this.shape_20.setTransform(937,-377.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#59473D").s().p("AATBdQAAgLgDgVQgDgYgIglIgNg9IgOg+QAKAZAKAjQAFASAKAsQAIApACAVQABAOgBASQgCAVgGAKQAFgMgBgTg");
	this.shape_21.setTransform(945.6,-376.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#59473D").s().p("AgsBhQAAgQADgUQAGgaAPgoQAPgiAPgeQATglARgYIgfBAIgbBAQgOAfgIAiQgGATgBAPQgBAVAGANQgJgNABgVg");
	this.shape_22.setTransform(927.7,-375.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#59473D").s().p("AAABsIABgkQAAgogBggIgGiPQAEAYAEAwIAFBHQABAwgBAZQgCAtgHAag");
	this.shape_23.setTransform(941.3,-373.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#59473D").s().p("AgWBHQACgYAIgwIAPhIQALgqAJgdIgaCQQgFAYgHAwIgEAkQgBAUACAQQgHgXADgyg");
	this.shape_24.setTransform(932.1,-375.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#59473D").s().p("AgYAeQADgMAKgWQAQgkAYgaIgRAhIgQAgIgOAhQgHAVgCAOQgCgPAFgWg");
	this.shape_25.setTransform(921.1,-375.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#59473D").p("AjyA8QgBgLACgPQAEgeASgQQAYgWAZgiQAcgmAIgZQgKA+AEAJQACAGAjgvQAiguAFgOQAEgKAEASQACAJABALIAPgmIAHAkIARhXIAWAwQASA4ACACQADADAMggIANAVIANgmIAhAuQAIAEAIACQAPADgDgOQgDgPAuBPQAWAnAYApIAYBuIi2BVIgwAQQgCABgWgDQgYgEgFADQgJAFg/g7IiDhZg");
	this.shape_26.setTransform(937.7,-376);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5E531").s().p("AgLDiQgXgDgGADQgIAFhAg8IiChZIAAgbQgBgMACgPQAFgdARgQQAYgXAZghQAdgnAHgYQgKA+AEAIQACAGAjgvQAiguAGgNQAEgKADASIADAUIAPgmIAHAjIARhXIAWAwQASA5ADACQACACAMgfIANAUIANgmIAhAuQAJAFAHACQAPADgDgPQgDgOAuBOIAuBRIAZBuIi2BUIgxAQIgCABIgWgDg");
	this.shape_27.setTransform(937.7,-375.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#765949").s().p("AA8ARQgjgWg2gCQgbAAgUAEIAWgPQA0AAAdAJQAKADAeAPQAQAJgKAAIgCABIgLgCg");
	this.shape_28.setTransform(923.2,-324.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#59473D").ss(0.7).p("ABUAVQgOgLgSgKQgkgVgWADQgiAEgQAEQgXAGgEAL");
	this.shape_29.setTransform(922,-319.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4BB94").s().p("ABGATQgdgTgOgBQgkgEgQACQgnACgTAUQgSAUAKgiIANglIBDgHQAEAAAyAYIAzAYIACAfIgagVg");
	this.shape_30.setTransform(922,-320.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#292929").s().p("AgLAMQgFgFAAgHQAAgFAFgGQAFgEAGAAQAHAAAFAEQAFAFAAAGQAAAHgFAFQgFAFgHgBQgGAAgFgEg");
	this.shape_31.setTransform(922,-319.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4766AE").s().p("AgdAZQgFgFAAgPQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANQAAAPgHAEQgHAFgWAAIgEABQgSAAgGgFg");
	this.shape_32.setTransform(922,-319.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA8AlQgegGgqgFQgogEgNABQgNABgHgQQgIgPAMgJQAQgMAagGQAigHAgALIAYANQAYAOAGAGQAJAMgBAMQgCALgPAAIgMgBg");
	this.shape_33.setTransform(922,-319.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#59473D").ss(0.7).p("AhTAVQAOgLASgKQAkgVAWADQAiAEAQAEQAXAGAEAL");
	this.shape_34.setTransform(957.3,-320.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4BB94").s().p("AhdAJIAzgYQAygYAEAAIBDAHIANAlQAKAigSgUQgTgUgngDQgRgBgjADQgWACgvAog");
	this.shape_35.setTransform(957.8,-321.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#59382D").s().p("AgmAjQAmg4AGgeQAEgTAPgBIAOADIgHABQgJADgDANIgFAUIANAjQAHAmgeAOQAEgHACgMQAGgXgFgVQgFgWgDAJQgCAFAAAJIgmBOg");
	this.shape_36.setTransform(976.2,-306.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#59473D").ss(0.6).p("AgSh3QAMgFAPAAQAeAAARAZQAWAggPBFQgRBKgpAGIgdAbQggAZgGgOQgHgNABgaIAUi2g");
	this.shape_37.setTransform(979.2,-308.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4BB94").s().p("Ag+B4QgHgNABgaIAUi2IAegSQAMgFAPAAQAeAAARAZQAWAggPBFQgRBKgpAGIgdAbQgUAQgKAAQgGAAgCgFg");
	this.shape_38.setTransform(979.2,-308.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#59382D").s().p("AAAgGIgBgNQgDgJgFAWQgGAVAGAXQADALAEAHQgfgOAHgmIANgiIgFgVQgDgMgIgDQgFgCgDABQAGgEAIABQAPABADASQAGAeAkBBIABAcg");
	this.shape_39.setTransform(902.3,-306.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#59473D").ss(0.6).p("AATh3IgbgFQgeAAgRAZQgXAgAQBFQARBKApAGIAdAbQAfAZAHgOQAHgOgBgZIgUi2g");
	this.shape_40.setTransform(899.4,-306.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4BB94").s().p("AAZBtIgdgbQgpgGgRhKQgQhFAXggQARgZAeAAIAbAFIAeASIAUC2QABAZgHAOQgCAFgGAAQgKAAgUgQg");
	this.shape_41.setTransform(899.4,-306.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#292929").s().p("AgLAMQgFgFAAgHQAAgFAFgGQAFgEAGAAQAHAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_42.setTransform(957.3,-320.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4766AE").s().p("AACAdQgWAAgHgFQgHgEAAgPQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANQAAAPgFAFQgGAFgSAAIgEgBg");
	this.shape_43.setTransform(957.3,-320.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhYAbQgCgMAKgMQAGgGAYgOIAYgNQAggLAiAHQAaAGAQAMQAMAJgIAPQgHAQgNgBQgNgBgoAEQgqAFgeAGIgMABQgPAAgCgLg");
	this.shape_44.setTransform(957.3,-320.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D3E36").s().p("Ah1AUQgIgEAHgLQALgRBbgHQBhgHAkAfIAFAFQABAGgSABIhEgOQhQgIhAAaIgDAAIgHgBg");
	this.shape_45.setTransform(939.1,-293);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#765949").s().p("AgSAMIgJgFQgNgGgPgBQgRgDgHgFQgHgEACgDQAoAJASgCQALgBAIAFQAFACACACIALgHQAVgEAMAAQALAAAPgEQALgCAEgDIgJAKQgSAMggAGIgLAKQgFADgGAAQgKAAgMgJg");
	this.shape_46.setTransform(939.4,-302.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#765949").s().p("ABqAdQgggcgugOQgtgOgyALQgYAFgQAJQgZABAFgLIAKgLQBcgyBWAiQAbALAXASQAMAJAGAFIAAAxQgHgKgQgOg");
	this.shape_47.setTransform(959.4,-327.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#765949").s().p("AiDAlIAEgQQAgg1A2gOQAYgGAwADQAXABAWAJQALAEAhASQAUALgPAFQgHABgMAAQhFgVgqAFIg4AQQgTAGgSAXQgSAVgGABIgCAAQgIAAABgOg");
	this.shape_48.setTransform(921.1,-327.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#765949").s().p("AhCAKQAdgPALgEQAcgJA1ABIAWAOIgvgDQg2ABgjAXIgNABQgKgBAQgIg");
	this.shape_49.setTransform(956.9,-325.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#59473D").ss(0.7).p("AmbgMIAKAvQANA5ASA0QA4CkBOAnQBfA2AeAOQArAWA/gBQBIgBB0g4QBvg1AWgoQAYgrAihlQAmhvAAgqQgBgng4iwIg4ipIlzgnIjaBEg");
	this.shape_50.setTransform(938.5,-318.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4BB94").s().p("AhvGfQgegPhfg2QhOgng4ikQgSgzgNg6IgKguIB5liIDahFIFzAnIA4CpQA4CxABAnQAAAqgmBuQgiBmgYArQgWAnhvA2Qh0A3hIABIgFABQg8AAgpgVg");
	this.shape_51.setTransform(938.5,-318.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(0.8).p("Ah3gfIAbAvQAmAvA4gEQBCgGAegdQAbgagIglQgGgdhzAPQg6AIg5AOg");
	this.shape_52.setTransform(938.8,-274.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4BB94").s().p("AhcAQIgagvQA4gOA6gIQBzgPAHAdQAIAlgbAaQgfAdhBAGIgJAAQgzAAgjgrg");
	this.shape_53.setTransform(938.8,-274.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EEC8B3").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_54.setTransform(1114.6,-87.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EEC8B3").s().p("AgSAIQgIgDAAgFQAAgEAIgEQAIgDAKAAQALAAAIADQAIAEAAAEQAAAFgIADQgHAEgMAAQgKAAgIgEg");
	this.shape_55.setTransform(1112.6,-92.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EEC8B3").s().p("AgSAIQgIgEAAgEQAAgEAIgDQAIgDAKAAQALAAAIADQAIAEAAADQAAAEgIAEQgIADgLAAQgKAAgIgDg");
	this.shape_56.setTransform(1120.9,-91.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EEC8B3").s().p("AgTAIQgIgDAAgFQAAgEAIgDQAIgEALAAQAMAAAIAEQAIADAAAEQAAAFgIADQgJAEgLAAQgKAAgJgEg");
	this.shape_57.setTransform(1118.1,-96.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EEC8B3").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEADAAAFQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_58.setTransform(1143.1,-106.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EEC8B3").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_59.setTransform(1147.8,-111.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EEC8B3").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_60.setTransform(1137.1,-114.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EEC8B3").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_61.setTransform(1143.1,-119);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EEC8B3").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_62.setTransform(936.8,-83.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EEC8B3").s().p("AgJAKQgFgEAAgGQAAgGAFgEQADgEAGAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgDgFg");
	this.shape_63.setTransform(934.6,-79.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EEC8B3").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_64.setTransform(931.7,-85.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EEC8B3").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape_65.setTransform(928.5,-81.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EEC8B3").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_66.setTransform(909.3,-102.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EEC8B3").s().p("AgPAPQgGgGAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_67.setTransform(901.8,-95.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EEC8B3").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHg");
	this.shape_68.setTransform(891.6,-104.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EEC8B3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_69.setTransform(899.6,-113.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2C2C2C").s().p("AB/DeQh8gmgHAAQgZAChWg6IhQg6Qgzg6gjhBQhFiDBPgoQBPgnBmA7QAzAeAjAmICUBMIA6BaIAoAkQArApAUAVQATAVgWAbQgNAPglAmQgIALgZAAQggAAg8gSg");
	this.shape_70.setTransform(913.6,-100.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#2B2A2A").ss(1.5).p("ACMhAIhXARQheAQglgDQgqgDgmAJQgkAIgKALQgQAQgFANQgJASATgDIChgQIgfANQgcAOAPAEQAQADAwgBIAtgCICBAOIA7ghIAXgTIAGg4g");
	this.shape_71.setTransform(814.1,-128.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B2539E").s().p("AALAyIgsACQgxABgPgDQgQgDAcgOIAfgOIigAQQgTADAIgSQAGgNAPgQQALgLAjgIQAmgJArADQAlADBdgQIBXgRIBZAUIgHA4IgWAUIg8Agg");
	this.shape_72.setTransform(814,-128.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2C2C2C").s().p("AieD6Qg0gBgegKQgfgLgMgVIhNiJQAHgTAIgVQASgoALgEQALgFBAACIA+ADQASgCAogSQBPgmBqhWQBvhZBbgDQAggBAXAKQATAJADAJQAIAcAGAwQAIBAgKAQQgWAkgnAwQg0BAgQgFQgOgFh8BRQg+Apg6ApIgmAJQgnAIglAAIgMgBg");
	this.shape_73.setTransform(1125.8,-107.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#2B2A2A").ss(1.5).p("AgFBXIALit");
	this.shape_74.setTransform(893.2,-152.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#2B2D2E").ss(1.5).p("AKWE1QAUBsAMAEQAJADB5A5QBwA1AWADQAVADgag9QgdhFACgFQASgihgoWIhkoPQgngvgfgfQg7g8g9gIQiMgSgCAAIo5ASIgJABQgUAEgVAHQghALgNALQgIAHgSgCQgKgBgbgDQg6gEguAoQilCOgZDoQgUCzgvDpQgCAIgFAIQgbAngYA1QgoBYgPBcQgPBgg1BpQgfA/giAvQgEAFgCAIIgnB7QgHAWAPATIAgApQALAPASACQATADAPgMIAJgHICrjQQAKgDAXgfIAUgdQAyhXAzhaQBki1AAgQIATi4IAYg4IAhiEQABgHAFgGIA2hVIggCPQgfCYAEAwQACAQASCeQAQCagDAUQgDAPgBAtQgCAjAhAKQAhALASgeQAthEAkgCQAigCCFg8QB/g5AyADQA/AECxAoQCnAlAhAOQAaAMAIgKQAHgJgEgeQgEgYADgoQAAgLACgNQAAgEgBgJQgKgugLg9QgQhWAAgbQAAgxgiinQAAACAAACQAWCpAWCQQAOBfAMA9gAJQikQgBgCAAgDQgFgZARhIQAQg/ASgtQAMgegXBeQgEAUgdBxQgCAHABAGg");
	this.shape_75.setTransform(924.7,-212.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F58335").s().p("At/NXQgSgCgLgPIgggpQgPgTAHgWIAnh7QACgIAEgFQAigvAfg/QA1hpAPhgQAPhcAohYQAYg1AbgnQAFgIACgIQAvjpAUizQAZjoCliOQAugoA6AEIAlAEQASACAIgHQANgLAhgLQAVgHAUgEIAJgBII5gSICOASQA9AIA7A8QAfAfAnAvIBkIPQBgIWgSAiQgCAFAdBFQAaA9gVgDQgWgDhwg1Qh5g5gJgDQgMgEgUhsQgDAoAEAYQAEAegHAJQgIAKgagMQghgOinglQixgog/gEQgygDh/A5QiFA8giACQgkACgtBEQgSAeghgLQghgKACgjQABgtADgPQADgUgQiaIgUiuQgEgwAfiYIAgiPIg2BVQgFAGgBAHIghCEIgYA4IgTC4QAAAQhkC1IhlCxIgUAdQgXAfgKADIirDQIgJAHQgNAJgOAAIgHAAgAJQikQgBgGACgHIAhiFQAXhegMAeQgSAtgQA/QgRBIAFAZIABAFIAAAAg");
	this.shape_76.setTransform(924.7,-212.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#2B2A2A").ss(1.5).p("ArIBgIABAEQAAAGgBAGQgLBIABAiQACAoAQASQAeAfA3A0QgCgqAEgrQAJhXAggKQAOgEBMg1QA+grAlAIQAOADAUAIQApAQAiAXQBtBHABBtIArCDIBjg/QAmgkAAgMQAAgBgMgdQgLgeAAgfQAAggALgyIAMgsIgOBdQgGBjAsAdQAyAiA3AcQAzAZAMAAQAYAKATAIQAkAOAOgMQAkgeA4hFQBLhbAFgvQAGg0AlgpQAlgnA0gOQA0gOA/gCQAGAAABgFQABgGgFgCIiUhQImkmUInGgBImDFI");
	this.shape_77.setTransform(963.9,-154.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#936B53").s().p("AD3G8IgrgSQgMAAgzgZQg3gcgygiQgsgdAGhjIAOhdIgMAsQgLAyAAAgQAAAfALAeIAMAeQAAAMgmAkIhjA/IgriDQgBhththHQgigXgpgQQgUgIgOgDQglgIg+ArQhMA1gOAEQggAKgJBXQgEArACAqQg3g0gegfQgQgSgCgoQgBgiALhIIABgMIgBgEIAWjbIGDlIIHGABIGkGUICUBQQAFACgBAGQgBAFgGAAQg/ACg0AOQg0AOglAnQglApgGA0QgFAvhLBbQg4BFgkAeQgHAGgKAAQgOAAgTgIg");
	this.shape_78.setTransform(963.9,-154.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#2B2A2A").ss(1.5).p("AlFC4QBdgBBhACQDCAFAVASQACgmAHgsQAQhXAcgdQAcgbBUgWIBOgQQgJgTgYgXQgugshFgLQhFgMgLgaQgDgJADgJIADgHIlvAAIgOC5IgqDGg");
	this.shape_79.setTransform(1025.7,-127.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EEC8B3").s().p("AiFC9QhigChcABIAAgQIAqjGIANi5IFwAAIgDAHQgEAJAEAJQAKAaBFAMQBGALAuAsQAXAXAKATIhPAQQhUAWgbAbQgcAdgQBXQgIAsgCAmQgVgSjBgFg");
	this.shape_80.setTransform(1025.5,-128.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#2B2D2E").ss(1.5).p("Al8AjIA4A8QBEA8A8AFQDkATArgDQAXgCBJAYQBNAZAJAQQAEAHgCgMQgEgcgBgNQgFhLAggrQAhgtAlgLIAfgCIg1gIQg8gNgjgZQgggVh0gwQhqgsgEgGQgEgFgwgWQgtgTAAgIQAAgJgIgJIgIgHIkDgOIgrBtIBHCn");
	this.shape_81.setTransform(1071.7,-110.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F58335").s().p("AEfDvQgKgQhNgZQhJgYgWACQgsADjkgTQg8gFhEg8Ig4g8IAMAAIhHinIArhtIEEAOIAIAHQAHAJAAAJQAAAIAtATQAvAWAEAFQAEAGBsAsQBzAwAgAVQAjAZA9ANIA0AIIgfACQgkALgiAtQgfArAEBLIAFApQACAIgBAAIgCgDg");
	this.shape_82.setTransform(1068.8,-110.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#2B2A2A").ss(1.5).p("AC/EHIA4gvQAGhvAGhvQANjeACgBQASgEi5gTQitgTgPAZQgXAoiqCyIAbCdIAoAUQAnAVAAAKQA8grBLgMQCWgXBKChg");
	this.shape_83.setTransform(926.1,-131.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EEC8B3").s().p("AghB8QhLAMg8ArQAAgKgogVIgngUIgcidQCqiyAYgoQAPgZCsATQC5ATgRAEQgDABgMDeIgNDeIg3AvQhLihiVAXg");
	this.shape_84.setTransform(926.2,-131.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#2B2D2E").ss(1.5).p("Aitg/IgHAuQBsB4AQgBQAMgBAoAaQAnAZAVAXQAUAVApgKQAmgKADgSIAXiMQgNgtgMgtQgZhbAEgBQAEAAgcgNQgOgGgPgGIjDAAg");
	this.shape_85.setTransform(926.9,-107.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F58335").s().p("AA4CvQgVgXgogZQgngagNABQgPABhsh4IAHguIA7h+IDEAAIAcAMQAcANgDAAQgEABAYBbIAaBaIgXCMQgDASgmAKQgOAEgKAAQgXAAgOgPg");
	this.shape_86.setTransform(927,-107.2);

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(978.4,11.9,1,1,0,0,0,19.6,6.4);
	this.instance_2.alpha = 0.559;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1009.2,107.5,1,1,0,0,0,283.9,75.7);
	this.instance_3.alpha = 0.559;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(964.7,-86.2,1,1,0,0,0,956.8,118.9);
	this.instance_4.alpha = 0.559;

	this.instance_5 = new lib.Path_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(965.9,-199.9,1.01,1,0,0,0,954.1,4.1);
	this.instance_5.alpha = 0.559;

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#E9E9E8").ss(0.2).p("AGdgBIs5AD");
	this.shape_87.setTransform(509.2,-508.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#E9E9E8").ss(0.2).p("AGegBIs6AD");
	this.shape_88.setTransform(508.9,-491.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#E9E9E8").ss(0.2).p("AGdgCIs5AF");
	this.shape_89.setTransform(499.1,-185.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#E9E9E8").ss(0.2).p("AGegBIs6AD");
	this.shape_90.setTransform(522.7,-473.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#E9E9E8").ss(0.2).p("AGdgCIs6AF");
	this.shape_91.setTransform(522.5,-202.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#E9E9E8").ss(0.1).p("AFYgBIqvAD");
	this.shape_92.setTransform(1471.6,-185.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#E9E9E8").ss(0.2).p("AGdgBIs6AD");
	this.shape_93.setTransform(1444.3,-201.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#E9E9E8").ss(0.2).p("AGdgBIs6AD");
	this.shape_94.setTransform(1464.3,-490.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#E9E9E8").ss(0.2).p("AGdgCIs6AF");
	this.shape_95.setTransform(1444,-472.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FEF9FB").ss(6.5).p("AFj8aItbHyMgABAqDIQGG+");
	this.shape_96.setTransform(1453.1,-341.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FEF9FB").ss(6.5).p("Alf8aINaHzMgABAqDIwHG9");
	this.shape_97.setTransform(523.5,-339.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#E9E9E8").ss(3.7).p("EBC3gAFMiFtAAK");
	this.shape_98.setTransform(995,-201.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAFMibJAAL");
	this.shape_99.setTransform(982.1,-225.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAFMibJAAK");
	this.shape_100.setTransform(982.1,-250.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAEMibJAAJ");
	this.shape_101.setTransform(982.1,-276.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAEMibJAAJ");
	this.shape_102.setTransform(982.1,-302.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAEMibJAAJ");
	this.shape_103.setTransform(982.1,-327.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAEMibJAAJ");
	this.shape_104.setTransform(982.1,-377.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAEMibJAAK");
	this.shape_105.setTransform(982.1,-403.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAEMibJAAJ");
	this.shape_106.setTransform(982.1,-351.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAEMibJAAJ");
	this.shape_107.setTransform(982,-428.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#E9E9E8").ss(0.5).p("EBNlgAEMibJAAJ");
	this.shape_108.setTransform(982,-454.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#E9E9E8").ss(1.5).p("EBBSgAEMiCjAAI");
	this.shape_109.setTransform(984.9,-472.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#E9E9E8").ss(0.3).p("EBFmgADMiLLAAI");
	this.shape_110.setTransform(989.3,-490.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#E9E9E8").ss(0.3).p("EBJtgAEMiTZAAJ");
	this.shape_111.setTransform(986.8,-507.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#E9E9E8").ss(0.6).p("AAA79MAABA37");
	this.shape_112.setTransform(1462.4,-352.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#E9E9E8").ss(0.4).p("AAA62MAABA1t");
	this.shape_113.setTransform(1444.2,-357.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_114.setTransform(1422.7,-365.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAAAAzJ");
	this.shape_115.setTransform(1400.5,-365.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_116.setTransform(1379.6,-365.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_117.setTransform(1357.4,-365.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_118.setTransform(1335.2,-365.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_119.setTransform(1314.2,-365.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAAAAzJ");
	this.shape_120.setTransform(1292,-365.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzK");
	this.shape_121.setTransform(1269.8,-365.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAABAzJ");
	this.shape_122.setTransform(1248.8,-365.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_123.setTransform(1226.6,-365.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAAAAzJ");
	this.shape_124.setTransform(1204.4,-365.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_125.setTransform(1183.4,-365.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAAAAzJ");
	this.shape_126.setTransform(1161.2,-365.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_127.setTransform(1140.2,-365.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_128.setTransform(1118,-365.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_129.setTransform(1095.8,-365.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_130.setTransform(1074.9,-365.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAAAAzJ");
	this.shape_131.setTransform(1052.7,-365.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAABAzK");
	this.shape_132.setTransform(1030.4,-365.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAAAAzJ");
	this.shape_133.setTransform(1009.5,-365.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_134.setTransform(987.3,-365.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAABAzJ");
	this.shape_135.setTransform(965.1,-365.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_136.setTransform(944.1,-365.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAAAAzJ");
	this.shape_137.setTransform(921.9,-365.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_138.setTransform(899.7,-365.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_139.setTransform(878.7,-365.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_140.setTransform(856.5,-365);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_141.setTransform(835.5,-365);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAABAzJ");
	this.shape_142.setTransform(813.3,-365);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzK");
	this.shape_143.setTransform(791.1,-365);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAABAzJ");
	this.shape_144.setTransform(770.2,-365);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_145.setTransform(747.9,-364.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAABAzJ");
	this.shape_146.setTransform(725.7,-364.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAAAAzL");
	this.shape_147.setTransform(704.8,-364.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5kMAAAAzJ");
	this.shape_148.setTransform(682.6,-364.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_149.setTransform(660.4,-364.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_150.setTransform(639.4,-364.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_151.setTransform(617.2,-364.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5lMAABAzL");
	this.shape_152.setTransform(595,-364.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#E9E9E8").ss(0.5).p("AAA5mMAABAzN");
	this.shape_153.setTransform(574,-364.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#E9E9E8").ss(0.4).p("AAA6SMAABA0l");
	this.shape_154.setTransform(552.6,-360.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#E9E9E8").ss(0.5).p("AAA7LMAABA2X");
	this.shape_155.setTransform(530.1,-354.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#E9E9E8").ss(0.5).p("AAA7rMAABA3X");
	this.shape_156.setTransform(509,-351.2);

	this.instance_6 = new lib.Path_79();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1312.1,276.5,1,1,0,0,0,501.9,208.7);
	this.instance_6.shadow = new cjs.Shadow("rgba(55,53,53,0.749)",12,12,26);

	this.instance_7 = new lib.Group_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(974.8,109.3,1,1,0,0,0,963.3,482.8);

	this.instance_8 = new lib.ClipGroup_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1114.6,-307.1,1,1,0,0,0,1093.6,120.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3F5C6F").s().p("EiYfAQKMAAHgg3MEw4AAkMgAHAg3g");
	this.shape_157.setTransform(1928.8,-493.3,0.978,0.898,0,0,0,975.6,1.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E1F2F1").s().p("EiXaByHMAAGjkYMEuvAALMgAGDkXg");
	this.shape_158.setTransform(970.9,820.5,1,1.003,0,0,0,-0.3,730.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(-46.1,-645,2254.2,1640.3), null);


(lib.endfeed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFF9D9").s().p("EhwfACUIAAknMDg/AAAIAAEng");
	this.shape.setTransform(720,685.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFF9D9").s().p("EgCTA2sMAAAhtXIEnAAMAAABtXg");
	this.shape_1.setTransform(248.6,350);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFF9D9").s().p("EhwfACUIAAknMDg/AAAIAAEng");
	this.shape_2.setTransform(720,14.7);

	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(251.7,20.1,0.477,0.477,0,0,0,0,-602.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DFF9D9").s().p("EhwfA2sMAAAhtXMDg/AAAMAAABtXg");
	this.shape_3.setTransform(720,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endfeed, new cjs.Rectangle(0,-0.2,1440,783.2), null);


(lib.FIELD2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF9FB").s().p("EhzcgpNQgKg1ASg2QAjhrCMAAMDgPgAQIApADQAxAJAnAeQB/BfgNEMUgAMAEMAAHAn1QADT7AGTGImDAAMgAChPTQAegwgFgtQgKhZiyAPUgCxAAPhpdAACUg0vAAAg0LgACIgggCQgmACggAVQhlBCAADfMAACBNEImCABg");
	this.shape.setTransform(289,142.7,0.289,0.289);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9E9E8").ss(0.2).p("AJHgCIyNAF");
	this.shape_1.setTransform(96.8,81.7,0.289,0.289);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E9E9E8").ss(0.2).p("AJHgCIyOAF");
	this.shape_2.setTransform(96.6,88.4,0.289,0.289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E9E9E8").ss(0.2).p("AJHgCIyNAF");
	this.shape_3.setTransform(92.6,212.9,0.289,0.289);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E9E9E8").ss(0.2).p("AJHgCIyNAF");
	this.shape_4.setTransform(102.2,95.9,0.289,0.289);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E9E9E8").ss(0.2).p("AJHgCIyNAF");
	this.shape_5.setTransform(102.2,206.2,0.289,0.289);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E9E9E8").ss(0.2).p("AHlgCIvJAF");
	this.shape_6.setTransform(488.4,213,0.289,0.289);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E9E9E8").ss(0.2).p("AJHgCIyNAF");
	this.shape_7.setTransform(477.3,206.5,0.289,0.289);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E9E9E8").ss(0.2).p("AJIgCIyPAF");
	this.shape_8.setTransform(485.4,88.9,0.289,0.289);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E9E9E8").ss(0.2).p("AJHgCIyNAF");
	this.shape_9.setTransform(477.2,96.1,0.289,0.289);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FEF9FB").ss(9.2).p("EAH1goFIy8K/MgACA7UIWuJ1");
	this.shape_10.setTransform(480.9,150.2,0.289,0.289);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FEF9FB").ss(9.2).p("EgHwgoFIS6LAMgABA7UI2uJ0");
	this.shape_11.setTransform(102.3,150.9,0.289,0.289);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E9E9E8").ss(5.3).p("EBeUgAHMi8nAAP");
	this.shape_12.setTransform(294.4,206.6,0.289,0.289);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E9E9E8").ss(0.8).p("EBtbgAHMja1AAP");
	this.shape_13.setTransform(289.2,196.7,0.289,0.289);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E9E9E8").ss(0.8).p("EBtbgAHMja2AAP");
	this.shape_14.setTransform(289.2,186.7,0.289,0.289);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E9E9E8").ss(0.8).p("EBtbgAHMja1AAP");
	this.shape_15.setTransform(289.2,176.1,0.289,0.289);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E9E9E8").ss(0.8).p("EBtbgAHMja2AAP");
	this.shape_16.setTransform(289.2,165.4,0.289,0.289);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E9E9E8").ss(0.8).p("EBtbgAHMja1AAP");
	this.shape_17.setTransform(289.2,155.4,0.289,0.289);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E9E9E8").ss(0.8).p("EBtcgAHMja3AAP");
	this.shape_18.setTransform(289.2,134.8,0.289,0.289);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E9E9E8").ss(0.8).p("EBtbgAHMja1AAP");
	this.shape_19.setTransform(289.2,124.2,0.289,0.289);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E9E9E8").ss(0.8).p("EBtcgAHMja3AAP");
	this.shape_20.setTransform(289.2,145.4,0.289,0.289);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E9E9E8").ss(0.8).p("EBtbgAHMja2AAP");
	this.shape_21.setTransform(289.2,114.2,0.289,0.289);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E9E9E8").ss(0.8).p("EBtcgAHMja3AAP");
	this.shape_22.setTransform(289.2,103.6,0.289,0.289);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E9E9E8").ss(2.1).p("EBcFgAFMi4JAAL");
	this.shape_23.setTransform(290.3,96.3,0.289,0.289);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E9E9E8").ss(0.4).p("EBiKgAFMjETAAL");
	this.shape_24.setTransform(292.1,88.8,0.289,0.289);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#E9E9E8").ss(0.5).p("EBn9gAFMjP5AAM");
	this.shape_25.setTransform(291.1,82,0.289,0.289);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#E9E9E8").ss(0.8).p("EAAAgncMAABBO5");
	this.shape_26.setTransform(484.7,145.1,0.289,0.289);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#E9E9E8").ss(0.6).p("EAAAgl3MAABBLv");
	this.shape_27.setTransform(477.3,143,0.289,0.289);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_28.setTransform(468.5,139.7,0.289,0.289);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIJ");
	this.shape_29.setTransform(459.5,139.7,0.289,0.289);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_30.setTransform(451,139.8,0.289,0.289);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_31.setTransform(441.9,139.8,0.289,0.289);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_32.setTransform(432.9,139.8,0.289,0.289);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIL");
	this.shape_33.setTransform(424.3,139.8,0.289,0.289);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_34.setTransform(415.3,139.8,0.289,0.289);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_35.setTransform(406.3,139.8,0.289,0.289);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIL");
	this.shape_36.setTransform(397.7,139.8,0.289,0.289);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIJ");
	this.shape_37.setTransform(388.7,139.8,0.289,0.289);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_38.setTransform(379.7,139.8,0.289,0.289);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_39.setTransform(371.1,139.8,0.289,0.289);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_40.setTransform(362.1,139.8,0.289,0.289);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_41.setTransform(353.6,139.9,0.289,0.289);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_42.setTransform(344.5,139.9,0.289,0.289);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_43.setTransform(335.5,139.9,0.289,0.289);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIJ");
	this.shape_44.setTransform(327,139.9,0.289,0.289);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIJ");
	this.shape_45.setTransform(317.9,139.9,0.289,0.289);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_46.setTransform(308.9,139.9,0.289,0.289);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIL");
	this.shape_47.setTransform(300.3,139.9,0.289,0.289);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_48.setTransform(291.3,139.9,0.289,0.289);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_49.setTransform(282.3,139.9,0.289,0.289);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIL");
	this.shape_50.setTransform(273.7,139.9,0.289,0.289);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_51.setTransform(264.7,139.9,0.289,0.289);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIJ");
	this.shape_52.setTransform(255.7,140,0.289,0.289);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIJ");
	this.shape_53.setTransform(247.1,140,0.289,0.289);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_54.setTransform(238.1,140,0.289,0.289);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_55.setTransform(229.5,140,0.289,0.289);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_56.setTransform(220.5,140,0.289,0.289);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_57.setTransform(211.5,140,0.289,0.289);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_58.setTransform(202.9,140,0.289,0.289);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_59.setTransform(193.9,140,0.289,0.289);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIJ");
	this.shape_60.setTransform(184.9,140,0.289,0.289);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIL");
	this.shape_61.setTransform(176.3,140,0.289,0.289);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_62.setTransform(167.3,140,0.289,0.289);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_63.setTransform(158.3,140.1,0.289,0.289);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkFMAABBIK");
	this.shape_64.setTransform(149.7,140.1,0.289,0.289);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_65.setTransform(140.7,140.1,0.289,0.289);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkEMAABBIK");
	this.shape_66.setTransform(131.6,140.1,0.289,0.289);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgkHMAABBIP");
	this.shape_67.setTransform(123.1,140.2,0.289,0.289);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#E9E9E8").ss(0.6).p("EAAAglFMAABBKL");
	this.shape_68.setTransform(114.4,142,0.289,0.289);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgmWMAABBMs");
	this.shape_69.setTransform(105.2,144.3,0.289,0.289);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#E9E9E8").ss(0.7).p("EAAAgnCMAABBOF");
	this.shape_70.setTransform(96.7,145.6,0.289,0.289);

	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(334.6,163.6,0.289,0.289,0,0,0,1093.8,120.8);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(294.1,266.6,0.289,0.289,0,0,0,955.1,319.2);
	this.instance_1.alpha = 0.879;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3F5C6F").s().p("EgrGAJlIABzOMBWMAAGIAATMg");
	this.shape_71.setTransform(294.3,66.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.5).p("AKFABI0JgB");
	this.shape_72.setTransform(170.4,67.6,0.289,0.289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.instance_1},{t:this.instance},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FIELD2, new cjs.Rectangle(18.1,5.1,632.7,403.8), null);


(lib.crowd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Flash();
	this.instance.parent = this;
	this.instance.setTransform(491.2,-30.3,0.105,0.105,0,0,0,84.5,0);

	this.instance_1 = new lib.Flash();
	this.instance_1.parent = this;
	this.instance_1.setTransform(389,23.6,0.105,0.105,0,0,0,84.5,0);

	this.instance_2 = new lib.Flash();
	this.instance_2.parent = this;
	this.instance_2.setTransform(312.5,-30.3,0.105,0.105,0,0,0,84.5,0);

	this.instance_3 = new lib.Flash();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255.2,21.7,0.105,0.105,0,0,0,84.5,0);

	this.instance_4 = new lib.Flash();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174.5,-22.2,0.105,0.105,0,0,0,84.5,0);

	this.instance_5 = new lib.Flash();
	this.instance_5.parent = this;
	this.instance_5.setTransform(119.6,16.9,0.105,0.105,0,0,0,84.5,0);

	this.instance_6 = new lib.Flash();
	this.instance_6.parent = this;
	this.instance_6.setTransform(17.6,-19.2,0.105,0.105,0,0,0,84.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:17.6,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:119.6,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:174.5,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:255.2,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:312.5,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:389,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:491.2,y:-30.3,regX:84.5}}]}).to({state:[{t:this.instance_6,p:{regX:85.2,scaleX:0.156,scaleY:0.156,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.8,scaleX:0.136,scaleY:0.136,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.9,scaleX:0.142,scaleY:0.142,x:173,y:-22.2}},{t:this.instance_3,p:{regX:85.2,scaleX:0.143,scaleY:0.143,x:253.8,y:21.7}},{t:this.instance_2,p:{regX:85.2,scaleX:0.15,scaleY:0.15,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.9,scaleX:0.133,scaleY:0.133,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.151,scaleY:0.151,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:18.8,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:83.9,scaleX:0.152,scaleY:0.152,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.7,scaleX:0.158,scaleY:0.158,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.176,scaleY:0.176,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.7,scaleX:0.164,scaleY:0.164,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.7,scaleX:0.17,scaleY:0.17,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.8,scaleX:0.15,scaleY:0.15,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.156,scaleY:0.156,x:489.7,y:18.8,regX:84.8}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:18.8,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:85.2,scaleX:0.156,scaleY:0.156,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.8,scaleX:0.136,scaleY:0.136,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.9,scaleX:0.142,scaleY:0.142,x:173,y:-22.2}},{t:this.instance_3,p:{regX:85.2,scaleX:0.143,scaleY:0.143,x:253.8,y:21.7}},{t:this.instance_2,p:{regX:85.2,scaleX:0.15,scaleY:0.15,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.9,scaleX:0.133,scaleY:0.133,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.151,scaleY:0.151,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:18.8,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:83.9,scaleX:0.152,scaleY:0.152,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.7,scaleX:0.158,scaleY:0.158,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.176,scaleY:0.176,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.7,scaleX:0.164,scaleY:0.164,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.7,scaleX:0.17,scaleY:0.17,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.8,scaleX:0.15,scaleY:0.15,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.156,scaleY:0.156,x:489.7,y:18.8,regX:84.8}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:18.8,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:85.2,scaleX:0.156,scaleY:0.156,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.8,scaleX:0.136,scaleY:0.136,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.9,scaleX:0.142,scaleY:0.142,x:173,y:-22.2}},{t:this.instance_3,p:{regX:85.2,scaleX:0.143,scaleY:0.143,x:253.8,y:21.7}},{t:this.instance_2,p:{regX:85.2,scaleX:0.15,scaleY:0.15,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.9,scaleX:0.133,scaleY:0.133,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.151,scaleY:0.151,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:18.8,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:83.9,scaleX:0.152,scaleY:0.152,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.7,scaleX:0.158,scaleY:0.158,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.176,scaleY:0.176,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.7,scaleX:0.164,scaleY:0.164,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.7,scaleX:0.17,scaleY:0.17,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.8,scaleX:0.15,scaleY:0.15,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.156,scaleY:0.156,x:489.7,y:18.8,regX:84.8}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:18.8,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:85.2,scaleX:0.156,scaleY:0.156,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.8,scaleX:0.136,scaleY:0.136,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.9,scaleX:0.142,scaleY:0.142,x:173,y:-22.2}},{t:this.instance_3,p:{regX:85.2,scaleX:0.143,scaleY:0.143,x:253.8,y:21.7}},{t:this.instance_2,p:{regX:85.2,scaleX:0.15,scaleY:0.15,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.9,scaleX:0.133,scaleY:0.133,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.151,scaleY:0.151,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:18.8,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:83.9,scaleX:0.152,scaleY:0.152,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.7,scaleX:0.158,scaleY:0.158,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.176,scaleY:0.176,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.7,scaleX:0.164,scaleY:0.164,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.7,scaleX:0.17,scaleY:0.17,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.8,scaleX:0.15,scaleY:0.15,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.156,scaleY:0.156,x:489.7,y:18.8,regX:84.8}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:5.8,y:25.5}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:94.6,y:-25.5}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:165,y:13.9}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:233.1,y:-28}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:318.2,y:23}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:-22.1}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:18.8,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:85.2,scaleX:0.156,scaleY:0.156,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.8,scaleX:0.136,scaleY:0.136,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.9,scaleX:0.142,scaleY:0.142,x:173,y:-22.2}},{t:this.instance_3,p:{regX:85.2,scaleX:0.143,scaleY:0.143,x:253.8,y:21.7}},{t:this.instance_2,p:{regX:85.2,scaleX:0.15,scaleY:0.15,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.9,scaleX:0.133,scaleY:0.133,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.151,scaleY:0.151,x:489.7,y:-30.3,regX:84.5}}]},4).to({state:[{t:this.instance_6,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:16.1,y:-19.2}},{t:this.instance_5,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:118.1,y:16.9}},{t:this.instance_4,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:173,y:-22.2}},{t:this.instance_3,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:253.7,y:21.7}},{t:this.instance_2,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:311,y:-30.3}},{t:this.instance_1,p:{regX:84.5,scaleX:0.105,scaleY:0.105,x:387.5,y:23.6}},{t:this.instance,p:{scaleX:0.105,scaleY:0.105,x:489.7,y:-30.3,regX:84.5}}]},4).wait(2));

	// crowd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4558A4").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape.setTransform(24.8,-9.9,0.283,0.283);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_1.setTransform(24.8,-17.9,0.283,0.283);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_2.setTransform(26.5,-15.1,0.283,0.283);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#39489A").s().p("Ah1BlQgygpAAg8QAAg6AygqQAxgqBEAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhEAAgxgqg");
	this.shape_3.setTransform(26.5,-23.2,0.283,0.283);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_4.setTransform(25.4,32.3,0.283,0.283);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#39489A").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_5.setTransform(25.4,24.3,0.283,0.283);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#35A353").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_6.setTransform(27.1,27.1,0.283,0.283);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#35A353").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_7.setTransform(27.1,19.1,0.283,0.283);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_8.setTransform(35.5,-7.6,0.283,0.283);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#39489A").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAygqBEAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhEAAgygqg");
	this.shape_9.setTransform(35.5,-15.6,0.283,0.283);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_10.setTransform(37.3,-13.8,0.283,0.283);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_11.setTransform(37.3,-21.9,0.283,0.283);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_12.setTransform(36.1,31.1,0.283,0.283);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_13.setTransform(36.1,23.1,0.283,0.283);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3D7B").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_14.setTransform(2.6,-15,0.283,0.283);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_15.setTransform(2.6,-23.1,0.283,0.283);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F683F").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_16.setTransform(2.6,-20.6,0.283,0.283);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3F683F").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_17.setTransform(2.6,-28.6,0.283,0.283);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_18.setTransform(3.2,27.2,0.283,0.283);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_19.setTransform(3.2,19.1,0.283,0.283);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3C3D7B").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_20.setTransform(3.2,21.6,0.283,0.283);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_21.setTransform(3.2,13.6,0.283,0.283);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8080BC").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_22.setTransform(14.8,-9.4,0.284,0.284);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_23.setTransform(14.8,-17.5,0.284,0.284);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3C3D7B").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_24.setTransform(273.4,-9.6,0.283,0.283);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C3D7B").s().p("Ah2BlQgwgpgBg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_25.setTransform(273.4,-17.6,0.283,0.283);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QABg5ApgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_26.setTransform(273,28.2,0.283,0.283);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8080BC").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAygqBEAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhEAAgygqg");
	this.shape_27.setTransform(273,20.2,0.283,0.283);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_28.setTransform(273,19.1,0.283,0.283);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D77698").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBGAAAwAqQAxAqAAA6QAAA7gxAqQgwAqhGAAQhFAAgwgqg");
	this.shape_29.setTransform(273,11.1,0.283,0.283);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8080BC").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_30.setTransform(274.1,-18.5,0.283,0.283);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8080BC").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_31.setTransform(274.1,-26.5,0.283,0.283);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3C3D7B").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_32.setTransform(83.1,30.3,0.283,0.283);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3C3D7B").s().p("Ah1BlQgygqABg7QgBg6AygqQAwgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgwgqg");
	this.shape_33.setTransform(83.1,22.3,0.283,0.283);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#39489A").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_34.setTransform(83.1,21.2,0.283,0.283);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#39489A").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhFAAgxgqg");
	this.shape_35.setTransform(83.1,13.1,0.283,0.283);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_36.setTransform(92.6,-9,0.283,0.283);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_37.setTransform(92.6,-17,0.283,0.283);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_38.setTransform(93.4,-15.1,0.283,0.283);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D77698").s().p("Ah1BlQgxgpgBg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_39.setTransform(93.4,-23.1,0.283,0.283);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_40.setTransform(75.2,27.6,0.283,0.283);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#303050").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_41.setTransform(75.2,19.6,0.283,0.283);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_42.setTransform(75.2,21.1,0.283,0.283);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgwgqg");
	this.shape_43.setTransform(75.2,13,0.283,0.283);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_44.setTransform(83.2,-9.2,0.283,0.283);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4558A4").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_45.setTransform(83.2,-17.2,0.283,0.283);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_46.setTransform(84.6,-16.5,0.283,0.283);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_47.setTransform(84.6,-24.5,0.283,0.283);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_48.setTransform(68.9,29.7,0.283,0.283);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_49.setTransform(68.8,21.7,0.283,0.283);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_50.setTransform(68.9,20.8,0.283,0.283);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_51.setTransform(68.8,12.8,0.283,0.283);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_52.setTransform(75.1,-8.5,0.283,0.283);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D77698").s().p("Ah1BlQgygqAAg7QAAg6AygqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_53.setTransform(75.1,-16.6,0.283,0.283);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApgBA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_54.setTransform(75.1,-15.8,0.283,0.283);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#303050").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_55.setTransform(75.1,-23.8,0.283,0.283);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_56.setTransform(61.6,28.4,0.283,0.283);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#39489A").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBGAAAxAqQAwAqABA6QgBA7gwAqQgxAqhGAAQhFAAgwgqg");
	this.shape_57.setTransform(61.6,20.4,0.283,0.283);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_58.setTransform(61.6,19.7,0.283,0.283);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4CACE0").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAxgqBFAAQBFAAAyAqQAwAqABA6QgBA7gwAqQgyAqhFAAQhFAAgxgqg");
	this.shape_59.setTransform(61.6,11.7,0.283,0.283);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8080BC").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_60.setTransform(65.7,-15.8,0.283,0.283);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8080BC").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_61.setTransform(65.7,-23.8,0.283,0.283);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_62.setTransform(65.7,-9.1,0.283,0.283);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_63.setTransform(65.7,-17.1,0.283,0.283);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_64.setTransform(55,26.8,0.283,0.283);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_65.setTransform(55,18.7,0.283,0.283);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_66.setTransform(53.6,19.7,0.283,0.283);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D77698").s().p("Ah1BlQgxgqgBg7QABg6AxgqQAwgqBFAAQBFAAAxAqQAyAqAAA6QAAA7gyAqQgxAqhFAAQhFAAgwgqg");
	this.shape_67.setTransform(53.6,11.7,0.283,0.283);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_68.setTransform(56.9,-7.6,0.283,0.283);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAyAqgBA6QABA8gyApQgxAqhFAAQhFAAgwgqg");
	this.shape_69.setTransform(56.9,-15.6,0.283,0.283);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_70.setTransform(137.8,28.8,0.283,0.283);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_71.setTransform(137.7,20.8,0.283,0.283);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_72.setTransform(137.8,19.7,0.283,0.283);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_73.setTransform(137.7,11.7,0.283,0.283);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_74.setTransform(140.2,-17.9,0.283,0.283);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4CACE0").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_75.setTransform(140.2,-25.9,0.283,0.283);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_76.setTransform(140.2,-9.9,0.283,0.283);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D77698").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhFAAgxgqg");
	this.shape_77.setTransform(140.2,-17.9,0.283,0.283);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_78.setTransform(128.6,27.8,0.283,0.283);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_79.setTransform(128.6,19.8,0.283,0.283);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_80.setTransform(128.6,21.2,0.283,0.283);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_81.setTransform(128.6,13.2,0.283,0.283);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_82.setTransform(132.3,-9.2,0.283,0.283);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_83.setTransform(132.3,-17.2,0.283,0.283);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_84.setTransform(133,-17.9,0.283,0.283);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#39489A").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgwgqg");
	this.shape_85.setTransform(133,-25.9,0.283,0.283);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_86.setTransform(123.5,28.2,0.283,0.283);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_87.setTransform(123.5,20.2,0.283,0.283);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_88.setTransform(123.5,19.3,0.283,0.283);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_89.setTransform(123.5,11.3,0.283,0.283);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_90.setTransform(124.2,-10.5,0.283,0.283);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_91.setTransform(124.2,-18.6,0.283,0.283);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_92.setTransform(124.2,-16.6,0.283,0.283);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_93.setTransform(124.2,-24.6,0.283,0.283);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_94.setTransform(116.3,26.9,0.283,0.283);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_95.setTransform(116.3,18.9,0.283,0.283);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_96.setTransform(116.3,18.2,0.283,0.283);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_97.setTransform(116.3,10.2,0.283,0.283);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_98.setTransform(116.3,-9.8,0.283,0.283);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_99.setTransform(116.3,-17.8,0.283,0.283);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_100.setTransform(116.3,-17.2,0.283,0.283);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_101.setTransform(116.3,-25.2,0.283,0.283);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_102.setTransform(109.6,25.3,0.283,0.283);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4CACE0").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_103.setTransform(109.6,17.2,0.283,0.283);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_104.setTransform(108.2,18.2,0.283,0.283);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_105.setTransform(108.2,10.2,0.283,0.283);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4558A4").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_106.setTransform(109.1,-9.9,0.283,0.283);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_107.setTransform(109.1,-17.9,0.283,0.283);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_108.setTransform(108.3,-17.9,0.283,0.283);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_109.setTransform(108.3,-25.9,0.283,0.283);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_110.setTransform(184.4,27.5,0.283,0.283);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_111.setTransform(184.4,19.4,0.283,0.283);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_112.setTransform(184.4,18.3,0.283,0.283);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4CACE0").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_113.setTransform(184.4,10.3,0.283,0.283);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_114.setTransform(186.1,-10.5,0.283,0.283);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_115.setTransform(186.1,-18.6,0.283,0.283);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_116.setTransform(186.1,-18.5,0.283,0.283);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_117.setTransform(186.1,-26.5,0.283,0.283);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_118.setTransform(176.5,24.8,0.283,0.283);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#303050").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBGAAAwAqQAyAqgBA6QABA7gyAqQgwAqhGAAQhFAAgxgqg");
	this.shape_119.setTransform(176.5,16.8,0.283,0.283);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_120.setTransform(176.5,18.3,0.283,0.283);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#39489A").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgwAqhGAAQhFAAgxgqg");
	this.shape_121.setTransform(176.5,10.2,0.283,0.283);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_122.setTransform(178.4,-11,0.283,0.283);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_123.setTransform(178.4,-19.1,0.283,0.283);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_124.setTransform(179.2,-19.1,0.283,0.283);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_125.setTransform(179.2,-27.1,0.283,0.283);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApgBA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_126.setTransform(170.2,26.9,0.283,0.283);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4CACE0").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAygqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgygqg");
	this.shape_127.setTransform(170.2,18.8,0.283,0.283);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_128.setTransform(170.2,18,0.283,0.283);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D77698").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_129.setTransform(170.2,10,0.283,0.283);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_130.setTransform(171.4,-17.8,0.283,0.283);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_131.setTransform(171.3,-25.9,0.283,0.283);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_132.setTransform(171.4,-11,0.283,0.283);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_133.setTransform(171.3,-19,0.283,0.283);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3C3D7B").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApgBA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_134.setTransform(162.9,25.6,0.283,0.283);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqgBg7QAAg6AygqQAwgqBFAAQBGAAAwAqQAxAqAAA6QAAA7gxAqQgwAqhGAAQhFAAgwgqg");
	this.shape_135.setTransform(162.9,17.6,0.283,0.283);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_136.setTransform(162.9,16.9,0.283,0.283);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_137.setTransform(162.9,8.8,0.283,0.283);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_138.setTransform(164.9,-11.8,0.283,0.283);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_139.setTransform(164.9,-19.8,0.283,0.283);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_140.setTransform(164.9,-17.9,0.283,0.283);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_141.setTransform(164.9,-25.9,0.283,0.283);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3C3D7B").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_142.setTransform(156.3,23.9,0.283,0.283);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_143.setTransform(156.3,15.9,0.283,0.283);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_144.setTransform(154.9,16.9,0.283,0.283);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D77698").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgxgqg");
	this.shape_145.setTransform(154.9,8.8,0.283,0.283);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_146.setTransform(156.2,-11,0.283,0.283);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_147.setTransform(156.2,-19,0.283,0.283);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_148.setTransform(156.2,-18.6,0.283,0.283);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_149.setTransform(156.2,-26.6,0.283,0.283);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_150.setTransform(226.8,25.5,0.283,0.283);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_151.setTransform(226.8,17.5,0.283,0.283);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#39489A").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_152.setTransform(226.8,16.4,0.283,0.283);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_153.setTransform(226.8,8.3,0.283,0.283);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_154.setTransform(231.5,-9.9,0.283,0.283);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_155.setTransform(231.5,-17.9,0.283,0.283);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_156.setTransform(230.8,-17.7,0.283,0.283);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#39489A").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_157.setTransform(230.8,-25.8,0.283,0.283);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_158.setTransform(218.9,22.9,0.283,0.283);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_159.setTransform(218.9,14.8,0.283,0.283);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_160.setTransform(218.9,16.3,0.283,0.283);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_161.setTransform(218.9,8.3,0.283,0.283);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#4558A4").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_162.setTransform(223.9,-18.6,0.283,0.283);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4558A4").s().p("Ah1BlQgxgpgBg8QAAg6AygqQAxgqBEAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhEAAgxgqg");
	this.shape_163.setTransform(223.9,-26.6,0.283,0.283);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_164.setTransform(223.9,-9.8,0.283,0.283);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D77698").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqABA6QgBA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_165.setTransform(223.9,-17.8,0.283,0.283);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_166.setTransform(212.6,24.9,0.283,0.283);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_167.setTransform(212.6,16.9,0.283,0.283);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_168.setTransform(212.6,16,0.283,0.283);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_169.setTransform(212.6,8,0.283,0.283);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_170.setTransform(216.5,-10.9,0.283,0.283);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#303050").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAygqBEAAQBGAAAwAqQAyAqAAA6QAAA7gyAqQgwAqhGAAQhEAAgygqg");
	this.shape_171.setTransform(216.5,-18.9,0.283,0.283);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_172.setTransform(215.8,-18.6,0.283,0.283);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_173.setTransform(215.8,-26.6,0.283,0.283);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_174.setTransform(205.3,23.6,0.283,0.283);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_175.setTransform(205.3,15.6,0.283,0.283);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_176.setTransform(205.3,14.9,0.283,0.283);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_177.setTransform(205.3,6.9,0.283,0.283);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_178.setTransform(207.6,-7.5,0.283,0.283);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#4558A4").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAxgqBFAAQBGAAAwAqQAyAqgBA6QABA8gyApQgwAqhGAAQhFAAgxgqg");
	this.shape_179.setTransform(207.6,-15.6,0.283,0.283);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_180.setTransform(208.3,-16.7,0.283,0.283);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_181.setTransform(208.3,-24.8,0.283,0.283);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_182.setTransform(198.7,22,0.283,0.283);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D77698").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBGAAAxAqQAxAqgBA6QABA7gxAqQgxAqhGAAQhFAAgxgqg");
	this.shape_183.setTransform(198.7,13.9,0.283,0.283);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_184.setTransform(197.3,14.9,0.283,0.283);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_185.setTransform(197.3,6.9,0.283,0.283);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_186.setTransform(200.8,-11.7,0.283,0.283);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#8080BC").s().p("Ah1BlQgygqAAg7QAAg6AygqQAxgqBEAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhEAAgxgqg");
	this.shape_187.setTransform(200.8,-19.7,0.283,0.283);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_188.setTransform(202.2,-19,0.283,0.283);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#303050").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBFAAAxAqQAxAqAAA6QABA7gyAqQgxAqhFAAQhFAAgwgqg");
	this.shape_189.setTransform(202.2,-27,0.283,0.283);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_190.setTransform(265.1,25.6,0.283,0.283);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4CACE0").s().p("Ah1BlQgxgqgBg7QABg6AxgqQAwgqBFAAQBGAAAwAqQAxAqAAA6QAAA7gxAqQgwAqhGAAQhFAAgwgqg");
	this.shape_191.setTransform(265.1,17.6,0.283,0.283);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_192.setTransform(265.1,19,0.283,0.283);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#303050").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAxgqBFAAQBGAAAwAqQAyAqAAA6QAAA7gyAqQgwAqhGAAQhFAAgxgqg");
	this.shape_193.setTransform(265.1,11,0.283,0.283);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_194.setTransform(266.2,-9.7,0.283,0.283);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_195.setTransform(266.2,-17.7,0.283,0.283);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#4558A4").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_196.setTransform(266.2,-19,0.283,0.283);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_197.setTransform(266.2,-27,0.283,0.283);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_198.setTransform(258.7,27.6,0.283,0.283);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAwgqBFAAQBFAAAyAqQAxAqAAA6QAAA7gxAqQgyAqhFAAQhFAAgwgqg");
	this.shape_199.setTransform(258.7,19.6,0.283,0.283);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_200.setTransform(258.7,18.8,0.283,0.283);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D77698").s().p("Ah2BlQgwgpAAg8QAAg6AwgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_201.setTransform(258.7,10.7,0.283,0.283);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_202.setTransform(257.5,-8.6,0.283,0.283);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_203.setTransform(257.5,-16.6,0.283,0.283);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_204.setTransform(258,-18.2,0.283,0.283);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#4558A4").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAygqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgygqg");
	this.shape_205.setTransform(258,-26.3,0.283,0.283);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_206.setTransform(251.5,26.4,0.283,0.283);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#303050").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAygqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgygqg");
	this.shape_207.setTransform(251.5,18.3,0.283,0.283);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_208.setTransform(251.5,17.6,0.283,0.283);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#4CACE0").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhEAAgygqg");
	this.shape_209.setTransform(251.5,9.6,0.283,0.283);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_210.setTransform(252.4,-7.8,0.283,0.283);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_211.setTransform(252.4,-15.9,0.283,0.283);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_212.setTransform(252.7,-19,0.283,0.283);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAyAqQAxAqgBA6QABA7gxAqQgyAqhFAAQhFAAgxgqg");
	this.shape_213.setTransform(252.7,-27,0.283,0.283);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_214.setTransform(244.8,24.7,0.283,0.283);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_215.setTransform(244.9,16.7,0.283,0.283);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_216.setTransform(243.5,17.6,0.283,0.283);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#4CACE0").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_217.setTransform(243.5,9.6,0.283,0.283);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_218.setTransform(245.4,-11.6,0.283,0.283);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_219.setTransform(245.4,-19.6,0.283,0.283);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_220.setTransform(245.4,-19.8,0.283,0.283);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_221.setTransform(245.4,-27.8,0.283,0.283);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_222.setTransform(510.4,30.9,0.284,0.284);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#8080BC").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_223.setTransform(510.4,22.9,0.284,0.284);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_224.setTransform(510.4,21.8,0.284,0.284);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_225.setTransform(510.4,13.8,0.284,0.284);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_226.setTransform(502.5,28.3,0.284,0.284);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D77698").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBFAAAyAqQAxAqAAA6QAAA7gxAqQgyAqhFAAQhFAAgwgqg");
	this.shape_227.setTransform(502.5,20.2,0.284,0.284);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#4558A4").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_228.setTransform(502.5,21.7,0.284,0.284);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#4558A4").s().p("Ah2BlQgwgpAAg8QAAg6AwgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgxgqg");
	this.shape_229.setTransform(502.5,13.7,0.284,0.284);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_230.setTransform(496.2,30.3,0.284,0.284);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#8080BC").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_231.setTransform(496.1,22.3,0.284,0.284);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_232.setTransform(496.2,21.5,0.284,0.284);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_233.setTransform(496.1,13.4,0.284,0.284);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_234.setTransform(488.9,29.1,0.284,0.284);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_235.setTransform(488.9,21,0.284,0.284);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_236.setTransform(488.9,20.3,0.284,0.284);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_237.setTransform(488.9,12.3,0.284,0.284);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_238.setTransform(482.2,27.4,0.284,0.284);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_239.setTransform(482.3,19.4,0.284,0.284);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_240.setTransform(480.9,20.3,0.284,0.284);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D77698").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgxgqg");
	this.shape_241.setTransform(480.9,12.3,0.284,0.284);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_242.setTransform(509.9,-8.7,0.284,0.284);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#303050").s().p("Ah1BlQgygpABg8QgBg6AygqQAwgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhFAAgwgqg");
	this.shape_243.setTransform(509.9,-16.7,0.284,0.284);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_244.setTransform(509.9,-17.8,0.284,0.284);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#39489A").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhFAAgxgqg");
	this.shape_245.setTransform(509.9,-25.8,0.284,0.284);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_246.setTransform(502,-11.3,0.284,0.284);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#303050").s().p("Ah2BlQgwgpgBg8QAAg6AxgqQAygqBEAAQBGAAAxAqQAwAqAAA6QAAA8gwApQgxAqhGAAQhEAAgygqg");
	this.shape_247.setTransform(502,-19.4,0.284,0.284);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_248.setTransform(502,-17.9,0.284,0.284);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#4CACE0").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_249.setTransform(502,-25.9,0.284,0.284);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_250.setTransform(495.6,-9.3,0.284,0.284);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_251.setTransform(495.6,-17.3,0.284,0.284);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_252.setTransform(495.6,-18.1,0.284,0.284);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_253.setTransform(495.6,-26.2,0.284,0.284);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_254.setTransform(488.4,-10.5,0.284,0.284);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#4CACE0").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAxgqBFAAQBFAAAyAqQAwAqABA6QgBA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_255.setTransform(488.4,-18.6,0.284,0.284);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#8080BC").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_256.setTransform(488.4,-19.3,0.284,0.284);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#8080BC").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgxgqg");
	this.shape_257.setTransform(488.4,-27.3,0.284,0.284);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_258.setTransform(481.7,-12.2,0.284,0.284);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_259.setTransform(481.7,-20.2,0.284,0.284);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_260.setTransform(480.4,-19.3,0.284,0.284);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAyAqQAxAqAAA6QAAA8gxApQgyAqhFAAQhFAAgwgqg");
	this.shape_261.setTransform(480.4,-27.3,0.284,0.284);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_262.setTransform(457.3,28.1,0.284,0.284);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_263.setTransform(457.3,20,0.284,0.284);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_264.setTransform(457.3,18.9,0.284,0.284);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_265.setTransform(457.3,10.9,0.284,0.284);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_266.setTransform(449.4,25.4,0.284,0.284);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_267.setTransform(449.4,17.4,0.284,0.284);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_268.setTransform(449.4,18.8,0.284,0.284);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_269.setTransform(449.4,10.8,0.284,0.284);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_270.setTransform(443.1,27.5,0.284,0.284);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_271.setTransform(443.1,19.4,0.284,0.284);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_272.setTransform(443.1,18.6,0.284,0.284);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_273.setTransform(443.1,10.5,0.284,0.284);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_274.setTransform(435.8,26.2,0.284,0.284);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_275.setTransform(435.8,18.2,0.284,0.284);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_276.setTransform(435.8,17.5,0.284,0.284);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_277.setTransform(435.8,9.4,0.284,0.284);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_278.setTransform(429.2,24.5,0.284,0.284);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#3C3D7B").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_279.setTransform(429.2,16.5,0.284,0.284);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_280.setTransform(427.8,17.5,0.284,0.284);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_281.setTransform(427.8,9.4,0.284,0.284);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#3C3D7B").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_282.setTransform(458.1,-10,0.284,0.284);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAyAqQAxAqAAA6QAAA7gxAqQgyAqhFAAQhEAAgxgqg");
	this.shape_283.setTransform(458.1,-18,0.284,0.284);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_284.setTransform(458.1,-19.1,0.284,0.284);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#303050").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAygqBEAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhEAAgygqg");
	this.shape_285.setTransform(458.1,-27.2,0.284,0.284);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_286.setTransform(450.1,-12.6,0.284,0.284);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBGAAAxAqQAwAqAAA6QAAA7gwAqQgxAqhGAAQhFAAgwgqg");
	this.shape_287.setTransform(450.1,-20.7,0.284,0.284);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_288.setTransform(450.1,-19.2,0.284,0.284);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#4CACE0").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAxAqAAA6QAAA8gxApQgyAqhFAAQhFAAgxgqg");
	this.shape_289.setTransform(450.1,-27.3,0.284,0.284);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_290.setTransform(443.8,-10.6,0.284,0.284);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA7gyAqQgxAqhFAAQhFAAgxgqg");
	this.shape_291.setTransform(443.8,-18.6,0.284,0.284);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_292.setTransform(443.8,-19.5,0.284,0.284);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#D77698").s().p("Ah2BlQgwgpAAg8QAAg6AwgqQAxgqBFAAQBFAAAxAqQAyAqAAA6QAAA8gyApQgxAqhFAAQhFAAgxgqg");
	this.shape_293.setTransform(443.8,-27.5,0.284,0.284);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_294.setTransform(436.6,-11.9,0.284,0.284);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#303050").s().p("Ah1BlQgygqAAg7QAAg6AygqQAwgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgwgqg");
	this.shape_295.setTransform(436.6,-19.9,0.284,0.284);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_296.setTransform(436.6,-20.6,0.284,0.284);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_297.setTransform(436.6,-28.6,0.284,0.284);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_298.setTransform(429.9,-13.5,0.284,0.284);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_299.setTransform(429.9,-21.6,0.284,0.284);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_300.setTransform(428.5,-20.6,0.284,0.284);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#D77698").s().p("Ah2BlQgxgqABg7QgBg6AxgqQAygqBEAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhEAAgygqg");
	this.shape_301.setTransform(428.5,-28.6,0.284,0.284);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#4CACE0").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_302.setTransform(406.6,28.4,0.283,0.283);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_303.setTransform(406.6,20.3,0.283,0.283);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_304.setTransform(406.6,19.2,0.283,0.283);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_305.setTransform(406.6,11.2,0.283,0.283);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_306.setTransform(407.4,-8.5,0.283,0.283);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_307.setTransform(407.4,-16.5,0.283,0.283);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_308.setTransform(407.4,-17.6,0.283,0.283);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_309.setTransform(407.4,-25.7,0.283,0.283);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg5AAgqgpg");
	this.shape_310.setTransform(398.7,25.7,0.283,0.283);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#8080BC").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAygqBEAAQBGAAAwAqQAxAqABA6QgBA7gxAqQgwAqhGAAQhEAAgygqg");
	this.shape_311.setTransform(398.7,17.7,0.283,0.283);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_312.setTransform(398.7,19.1,0.283,0.283);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#4CACE0").s().p("Ah2BlQgwgqgBg7QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_313.setTransform(398.7,11.1,0.283,0.283);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_314.setTransform(399.4,-11.1,0.283,0.283);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_315.setTransform(399.4,-19.2,0.283,0.283);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_316.setTransform(399.4,-17.7,0.283,0.283);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#4558A4").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_317.setTransform(399.4,-25.7,0.283,0.283);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_318.setTransform(392.4,27.8,0.283,0.283);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_319.setTransform(392.4,19.7,0.283,0.283);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_320.setTransform(392.4,18.9,0.283,0.283);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_321.setTransform(392.4,10.8,0.283,0.283);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApAAA5QAAA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_322.setTransform(393.1,-9.1,0.283,0.283);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_323.setTransform(393.1,-17.1,0.283,0.283);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#8080BC").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_324.setTransform(393.1,-18,0.283,0.283);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_325.setTransform(393.1,-26,0.283,0.283);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_326.setTransform(385.1,26.5,0.283,0.283);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_327.setTransform(385.1,18.5,0.283,0.283);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_328.setTransform(385.1,17.8,0.283,0.283);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#3C3D7B").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_329.setTransform(385.1,9.7,0.283,0.283);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_330.setTransform(385.9,-10.4,0.283,0.283);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_331.setTransform(385.9,-18.4,0.283,0.283);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_332.setTransform(385.9,-19.1,0.283,0.283);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_333.setTransform(385.9,-27.1,0.283,0.283);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_334.setTransform(378.5,24.8,0.283,0.283);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_335.setTransform(378.5,16.8,0.283,0.283);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_336.setTransform(377.1,17.8,0.283,0.283);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#D77698").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqABA6QgBA8gwApQgxAqhGAAQhFAAgxgqg");
	this.shape_337.setTransform(377.1,9.7,0.283,0.283);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_338.setTransform(379.2,-12,0.283,0.283);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#4CACE0").s().p("Ah2BlQgwgpgBg8QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA8gwApQgyAqhFAAQhFAAgxgqg");
	this.shape_339.setTransform(379.2,-20.1,0.283,0.283);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_340.setTransform(377.8,-19.1,0.283,0.283);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_341.setTransform(377.8,-27.1,0.283,0.283);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_342.setTransform(316.5,26.5,0.283,0.283);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#4CACE0").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAxgqBFAAQBGAAAxAqQAwAqAAA6QAAA8gwApQgxAqhGAAQhEAAgygqg");
	this.shape_343.setTransform(316.5,18.5,0.283,0.283);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_344.setTransform(316.5,17.4,0.283,0.283);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#D77698").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhEAAgygqg");
	this.shape_345.setTransform(316.5,9.3,0.283,0.283);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg6AAgpgpg");
	this.shape_346.setTransform(316.5,-9.1,0.283,0.283);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#4558A4").s().p("Ah2BlQgxgqAAg7QAAg6AxgqQAxgqBFAAQBFAAAyAqQAwAqAAA6QAAA7gwAqQgyAqhFAAQhFAAgxgqg");
	this.shape_347.setTransform(316.5,-17.1,0.283,0.283);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_348.setTransform(316.5,-18.2,0.283,0.283);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#303050").s().p("Ah2BlQgxgpAAg8QAAg6AxgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgygqg");
	this.shape_349.setTransform(316.5,-26.3,0.283,0.283);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_350.setTransform(308.6,23.8,0.283,0.283);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_351.setTransform(308.6,15.8,0.283,0.283);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_352.setTransform(308.6,17.3,0.283,0.283);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_353.setTransform(308.6,9.3,0.283,0.283);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#303050").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_354.setTransform(308.6,-11.8,0.283,0.283);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_355.setTransform(308.6,-19.8,0.283,0.283);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#3C3D7B").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_356.setTransform(308.6,-18.3,0.283,0.283);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_357.setTransform(308.6,-26.3,0.283,0.283);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApABA5QgBA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_358.setTransform(302.3,25.9,0.283,0.283);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#4CACE0").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAygqBEAAQBGAAAwAqQAyAqgBA6QABA8gyApQgwAqhGAAQhEAAgygqg");
	this.shape_359.setTransform(302.3,17.9,0.283,0.283);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_360.setTransform(302.3,17,0.283,0.283);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#D77698").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAygqBEAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhEAAgygqg");
	this.shape_361.setTransform(302.3,9,0.283,0.283);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_362.setTransform(302.3,-9.7,0.283,0.283);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#4CACE0").s().p("Ah2BlQgwgpgBg8QABg6AwgqQAygqBEAAQBFAAAyAqQAwAqABA6QgBA8gwApQgyAqhFAAQhEAAgygqg");
	this.shape_363.setTransform(302.3,-17.7,0.283,0.283);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_364.setTransform(302.3,-18.6,0.283,0.283);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#D77698").s().p("Ah2BlQgwgpAAg8QAAg6AwgqQAxgqBFAAQBFAAAyAqQAxAqgBA6QABA8gxApQgyAqhFAAQhFAAgxgqg");
	this.shape_365.setTransform(302.3,-26.6,0.283,0.283);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#4558A4").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_366.setTransform(295.1,24.6,0.283,0.283);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#4558A4").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_367.setTransform(295.1,16.6,0.283,0.283);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#4CACE0").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_368.setTransform(295.1,15.9,0.283,0.283);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_369.setTransform(295.1,7.9,0.283,0.283);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_370.setTransform(295.1,-11,0.283,0.283);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_371.setTransform(295.1,-19,0.283,0.283);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_372.setTransform(295.1,-19.7,0.283,0.283);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_373.setTransform(295.1,-27.7,0.283,0.283);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_374.setTransform(288.4,23,0.283,0.283);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_375.setTransform(288.4,14.9,0.283,0.283);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#39489A").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA7AAApApQAqApgBA5QABA6gqApQgpApg7AAQg5AAgqgpg");
	this.shape_376.setTransform(287,15.9,0.283,0.283);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhFAAgwgqg");
	this.shape_377.setTransform(287,7.9,0.283,0.283);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_378.setTransform(288.4,-12.6,0.283,0.283);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#39489A").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_379.setTransform(288.4,-20.7,0.283,0.283);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_380.setTransform(287,-19.7,0.283,0.283);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg7AxgpQAwgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgwgqg");
	this.shape_381.setTransform(287,-27.7,0.283,0.283);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_382.setTransform(362.1,27.7,0.283,0.283);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_383.setTransform(362.1,19.7,0.283,0.283);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#303050").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_384.setTransform(362.1,18.6,0.283,0.283);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_385.setTransform(362.1,10.6,0.283,0.283);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#303050").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_386.setTransform(364.8,-8.4,0.283,0.283);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#303050").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_387.setTransform(364.8,-16.4,0.283,0.283);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#D77698").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQAqApAAA5QgBA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_388.setTransform(364.8,-17.5,0.283,0.283);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_389.setTransform(364.8,-25.5,0.283,0.283);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_390.setTransform(354.2,25.1,0.283,0.283);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_391.setTransform(354.2,17.1,0.283,0.283);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#D77698").s().p("AhjBjQgpgpgBg6QABg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_392.setTransform(354.2,18.5,0.283,0.283);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#D77698").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_393.setTransform(354.2,10.5,0.283,0.283);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#39489A").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_394.setTransform(356.9,-11,0.283,0.283);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_395.setTransform(356.9,-19.1,0.283,0.283);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_396.setTransform(356.9,-17.6,0.283,0.283);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxAqAAA6QAAA8gxApQgwAqhGAAQhEAAgxgqg");
	this.shape_397.setTransform(356.9,-25.6,0.283,0.283);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#3C3D7B").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_398.setTransform(347.9,27.1,0.283,0.283);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_399.setTransform(347.9,19.1,0.283,0.283);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#4CACE0").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_400.setTransform(347.9,18.3,0.283,0.283);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#4CACE0").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_401.setTransform(347.9,10.2,0.283,0.283);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#3C3D7B").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApABA5QgBA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_402.setTransform(350.6,-9,0.283,0.283);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_403.setTransform(350.6,-17,0.283,0.283);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#303050").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA6AAAqApQAqApAAA5QAAA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_404.setTransform(350.6,-17.8,0.283,0.283);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#303050").s().p("Ah1BlQgxgpAAg8QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_405.setTransform(350.6,-25.9,0.283,0.283);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#8080BC").s().p("AhjBjQgqgpAAg6QABg5ApgpQApgpA6AAQA6AAAqApQAqApgBA5QABA6gqApQgqApg6AAQg6AAgpgpg");
	this.shape_406.setTransform(340.6,25.9,0.283,0.283);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#8080BC").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_407.setTransform(340.6,17.8,0.283,0.283);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_408.setTransform(340.6,17.1,0.283,0.283);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#4CACE0").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_409.setTransform(340.6,9.1,0.283,0.283);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_410.setTransform(343.4,-10.2,0.283,0.283);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#39489A").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_411.setTransform(343.3,-18.3,0.283,0.283);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_412.setTransform(343.4,-19,0.283,0.283);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhEAAgxgqg");
	this.shape_413.setTransform(343.3,-27,0.283,0.283);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#4558A4").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_414.setTransform(334,24.2,0.283,0.283);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#4558A4").s().p("Ah2BlQgxgpABg8QgBg6AxgqQAxgqBFAAQBFAAAxAqQAxAqABA6QgBA8gxApQgxAqhFAAQhFAAgxgqg");
	this.shape_415.setTransform(334,16.2,0.283,0.283);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#D77698").s().p("AhjBjQgqgpAAg6QAAg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_416.setTransform(332.6,17.1,0.283,0.283);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_417.setTransform(332.6,9.1,0.283,0.283);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#4CACE0").s().p("AhjBjQgqgpAAg6QAAg5AqgpQAqgpA5AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg5AAgqgpg");
	this.shape_418.setTransform(336.7,-11.9,0.283,0.283);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#4CACE0").s().p("Ah1BlQgygpAAg8QAAg6AygqQAwgqBFAAQBGAAAxAqQAwAqAAA6QAAA8gwApQgxAqhGAAQhFAAgwgqg");
	this.shape_419.setTransform(336.7,-19.9,0.283,0.283);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#D77698").s().p("AhjBjQgqgpABg6QgBg5AqgpQApgpA6AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg6AAgpgpg");
	this.shape_420.setTransform(335.3,-19,0.283,0.283);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#D77698").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBGAAAwAqQAxApAAA7QAAA7gxAqQgwAqhGAAQhEAAgxgqg");
	this.shape_421.setTransform(335.3,-27,0.283,0.283);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#3C3D7B").s().p("AhjBjQgqgpABg6QgBg5AqgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_422.setTransform(15.7,-14.8,0.284,0.284);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#3C3D7B").s().p("Ah1BlQgxgqAAg7QAAg6AxgqQAxgqBEAAQBFAAAxAqQAxAqAAA6QAAA8gxApQgxAqhFAAQhEAAgxgqg");
	this.shape_423.setTransform(15.7,-22.8,0.284,0.284);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3C383A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQAqgpA5AAQA7AAApApQApApAAA5QAAA6gpApQgpApg7AAQg5AAgqgpg");
	this.shape_424.setTransform(15.4,32.8,0.284,0.284);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#3C383A").s().p("Ah2BlQgwgqgBg7QABg6AwgqQAxgqBFAAQBFAAAxAqQAxAqAAA6QAAA7gxAqQgxAqhFAAQhFAAgxgqg");
	this.shape_425.setTransform(15.4,24.8,0.284,0.284);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#39489A").s().p("AhjBjQgpgpAAg6QAAg5ApgpQApgpA6AAQA6AAAqApQApApAAA5QAAA6gpApQgqApg6AAQg6AAgpgpg");
	this.shape_426.setTransform(16.3,27.4,0.284,0.284);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#39489A").s().p("Ah2BlQgwgqAAg7QAAg6AwgqQAxgqBFAAQBFAAAxAqQAyAqgBA6QABA7gyAqQgxAqhFAAQhFAAgxgqg");
	this.shape_427.setTransform(16.3,19.4,0.284,0.284);


}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-40.3,517.3,77.1);


(lib.Choose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFF9D9").s().p("EgEAA2fMAAAhs9IIBAAMAAABs9g");
	this.shape.setTransform(238.2,339.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFF9D9").s().p("EhSXAENIAAoaMCkvAAAIAAIag");
	this.shape_1.setTransform(739.8,14.6);

	this.instance = new lib.bigPlayer();
	this.instance.parent = this;
	this.instance.setTransform(1014.7,383.2,0.184,0.184,0,0,0,684.6,-4.1);

	this.instance_1 = new lib.crowdcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.1,335.9,1.715,1.728,0,0,0,21.3,11.2);

	this.instance_2 = new lib.גיבוימחולל19pngcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(240.3,-7.2,0.495,0.495);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,0,0)").ss(1,1,1).p("EBwegDDMjg/AAAIAAGHMDhDAAAIAAmHg");
	this.shape_2.setTransform(720.2,706.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DFF9D9").s().p("EhwhA5wIAAmIMDg/AAAMjg/AAAMAAAhtXMDg/AAAMAAABtXIAEAAIAAGIg");
	this.shape_3.setTransform(720.2,356.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Choose, new cjs.Rectangle(-1,-13,1442.4,740.3), null);


(lib.ballMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0.9,0.9,0.488,0.483,0,0,0,40.9,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:40.8,regY:41.1,scaleX:0.65,scaleY:0.65,x:0.5,y:0},15).wait(1).to({regX:41,regY:41.4,scaleX:0.48,scaleY:0.48,x:0.6,y:0.7},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.1,40,40);


(lib.gameCodeInput = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.play_btn = new lib.play_btn();
	this.play_btn.parent = this;
	this.play_btn.setTransform(44.9,15,0.483,0.483);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.gameCode_txt = new lib.an_TextInput({'id': 'gameCode_txt', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.gameCode_txt.setTransform(162.4,15,1,1.182,0,0,0,50,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAhIABgHIAHABQAKAAAEgHQAGgIgBgMQAAgagRAAQgGAAgDAEQgFAEgBAGIgJAtIgJAAIAJguIgJgUIAJAAIAHAPQADgIAFgEQAFgDAFAAQAMAAAGAHQAHAIAAASQAAARgHAIQgIAJgMAAg");
	this.shape.setTransform(205.4,47.8,1.653,1.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfghIAJAAIAEAhIAJgFQADgEABgEIACgMIAAgHIAIAAIgBAHQAAANgEAHQgFAHgMAFIACASQASAAAKgLQAJgKAAgTIAAgSIAJAAIAAASQABAYgOAMQgNANgbAAg");
	this.shape_1.setTransform(193.1,47.9,1.653,1.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQAhIAAgqQAAgHgCgFQgEgEgGAAIgTAAIAAA6IgKAAIAAhBIAeAAQAKAAAGAGQAFAGAAAMIAAApg");
	this.shape_2.setTransform(181.3,47.7,1.653,1.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAtIAAg5IACgIIAIAAIAABBgAgGAOQAGAAADgDQAFgCADgGQADgEABgLIACgZIgrAAIAAgHIA0AAIgCAfQgBAPgHAKQgJAJgMAAg");
	this.shape_3.setTransform(170.4,49.7,1.653,1.653);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDgGIgCgOIAIAAIACAOIAAAZIgIACg");
	this.shape_4.setTransform(162.6,45.7,1.653,1.653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAhIAAhBIAfAAQAUAAAAAWIAAArgAgQAaIAhAAIAAgkQAAgIgDgDQgEgEgGAAIgUAAg");
	this.shape_5.setTransform(154.7,47.7,1.653,1.653);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIArIAWg6IgkAAIAAgbIAIAAIAAATIAlAAIAAAIIgXA6g");
	this.shape_6.setTransform(140.1,46.1,1.653,1.653);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAFAhIAAgsQAAgJADgFIghAAIAAgHIAzAAIAAAHIgJAAQgDAFAAAJIAAAsg");
	this.shape_7.setTransform(130.1,47.7,1.653,1.653);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAhIAAgzIgCgOIAIAAIADAOIAAAzg");
	this.shape_8.setTransform(122.6,47.7,1.653,1.653);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRAbQAHgDAHgEQAEgFAEgHIAAgVQgBgGgBgDQgCgDgDgBIgIgBIACgHIAJACQAHABADAEQADAEAAAJIAAAWIAEAZIgJAAIgDgQQgDAFgFAGQgEAEgIADg");
	this.shape_9.setTransform(116.5,47.8,1.653,1.653);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAhIABgHIAHABQALAAADgHQAFgHAAgNQAAgagRAAQgGAAgDAEQgFAEgBAGIgJAtIgJAAIAJguIgJgUIAJAAIAHAPQADgIAFgEQAFgDAFAAQAMAAAGAHQAHAIAAASQAAAQgHAJQgHAJgNAAg");
	this.shape_10.setTransform(107,47.8,1.653,1.653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAUAhIgbgnIgNAnIgJAAIAQgwIgKgRIAJAAIAVAgIAKggIAJAAIgOAoIARAZg");
	this.shape_11.setTransform(95.5,47.7,1.653,1.653);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAnIAAgFIAVgWQAHgJADgFQAEgHAAgGQAAgHgDgFQgFgDgGAAQgFgBgEADQgEADgDAEIgGgGQAGgFAFgDQAGgDAGAAQAKAAAGAHQAGAGAAAJQAAAHgEAIQgDAGgHAIIgRATIAjAAIAAAHg");
	this.shape_12.setTransform(81,46.8,1.653,1.653);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAdQgGgLAAgSQAAgSAGgKQAHgLAKAAQAMAAAGALQAGAJAAATQAAATgGAKQgGALgMAAQgKAAgHgLgAgKgXQgFAHAAAQQAAARAFAIQADAIAHAAQAHAAAFgIQAEgJAAgQQAAgPgEgIQgFgIgHAAQgHAAgDAIg");
	this.shape_13.setTransform(71.3,46.9,1.653,1.653);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAmIAAgHIARAAIAAg5IgNAAIAAgGQAJgBAGgEIAGAAIAABEIAQAAIAAAHg");
	this.shape_14.setTransform(61.9,46.9,1.653,1.653);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIALQAFgCADgEQACgEgBgDIgBAAQgBAAgCgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAEAAADADQACAEgBAEQAAAFgDAHQgFAGgGACg");
	this.shape_15.setTransform(55,53.9,1.653,1.653);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAmIAAgHIARAAIAAg5IgOAAIAAgGQAKgBAGgEIAGAAIAABEIAQAAIAAAHg");
	this.shape_16.setTransform(44.3,46.9,1.653,1.653);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAdQgGgKAAgTQAAgSAGgKQAHgLAKAAQAMAAAFALQAHAJAAATQAAATgHAKQgFALgMAAQgKAAgHgLgAgLgXQgDAIAAAPQAAAQADAJQAFAIAGAAQAHAAAFgIQADgJAAgQQAAgPgDgIQgFgIgHAAQgGAAgFAIg");
	this.shape_17.setTransform(34.9,46.9,1.653,1.653);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAmIAAgHIASAAIAAg5IgOAAIAAgGQAIgBAIgEIAFAAIAABEIAQAAIAAAHg");
	this.shape_18.setTransform(25.5,46.9,1.653,1.653);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAhIAAgsQAAgHgDgDQgDgEgHAAIgbAAIAAgHIAdAAQAUAAAAAWIAAArgAgYAhIAAggIABgHIAIAAIAAAng");
	this.shape_19.setTransform(206.2,-11.1,1.653,1.653);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAhIAAgHIAPAAQAJAAAFgFQAFgHAAgKIAAgHQAAgKgFgHQgFgFgJAAIgPAAIAAgHIARAAQANAAAGAIQAHAHAAAOIAAAHQAAAOgHAHQgHAJgMgBg");
	this.shape_20.setTransform(196.1,-11.1,1.653,1.653);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOAiIAAgHIAUAAIAAgoQAAgFgDgDQgCgDgDgBIgIgBIABgHIAJABQAIACADAFQAEAEAAAIIAAAvg");
	this.shape_21.setTransform(187.6,-11.2,1.653,1.653);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbghIAgAAQAKAAAGAHQAGAGABAMIAAADQABAlgwACgAgLAaQAPgCAHgHQAJgGgBgQIAAgDQAAgHgEgFQgEgGgHAAIgVAAg");
	this.shape_22.setTransform(178.6,-11,1.653,1.653);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAuIAAg6IACgIIAIAAIAABCgAgGAOQAGAAADgDQAFgDADgFQACgEACgLIACgZIgrAAIAAgHIA1AAIgDAeQgBAQgHAKQgJAJgMAAg");
	this.shape_23.setTransform(163.7,-9.1,1.653,1.653);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDAhIAAg0IgCgNIAIAAIACANIAAA0g");
	this.shape_24.setTransform(155.9,-11.1,1.653,1.653);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAFAhIAAgsQgBgJAEgFIghAAIAAgHIAzAAIAAAHIgJAAQgDAFAAAJIAAAsg");
	this.shape_25.setTransform(148.4,-11.1,1.653,1.653);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHAhIABgHIAHABQALAAAEgHQAFgHAAgNQAAgagRAAQgFAAgFAEQgEADgBAHIgIAtIgKAAIAJguIgJgUIAKAAIAFAPQACgHAGgFQAFgDAGAAQAMAAAGAIQAHAIAAARQAAAQgIAJQgGAJgOAAg");
	this.shape_26.setTransform(133.2,-11,1.653,1.653);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfghIAJAAIAEAhIAJgFQADgDABgFQACgFAAgIIAAgHIAIAAIAAAHQgBAOgEAHQgFAHgMAGIACASQASgCAKgJQAJgLAAgUIAAgRIAKAAIAAARQAAAZgOAMQgOANgaAAg");
	this.shape_27.setTransform(120.8,-11,1.653,1.653);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AARAhIAAgqQAAgIgEgEQgDgEgGAAIgUAAIAAA6IgJAAIAAhBIAfAAQAKAAAFAFQAFAHAAALIAAAqg");
	this.shape_28.setTransform(109,-11.1,1.653,1.653);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAuIAAg6IABgIIAIAAIAABCgAgGAOQAGAAAEgDQAEgCADgGQACgEABgLIADgZIgqAAIAAgHIA0AAIgCAeQgCASgHAIQgIAJgNAAg");
	this.shape_29.setTransform(98,-9.1,1.653,1.653);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AvgESQgSAAgOgNQgOgOAAgTIAAnHQAAgTAOgNQAOgOASAAIfBAAQASAAAOAOQAOAOAAASIAAHHQAAATgOAOQgOANgSAAg");
	this.shape_30.setTransform(63,11.5,1.653,1.653,0,0,0,3.5,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.gameCode_txt},{t:this.play_btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameCodeInput, new cjs.Rectangle(-114.5,-25,343.4,90.6), null);


(lib.fieldPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgkJAv3QhMAAg2g1Qg1g2gBhMMAAAhZ+QABhMA1g2QA2g2BMAAMBITAAAQBMAAA2A2QA2A2AABMMAAABZ+QAABMg2A2Qg2A1hMAAg");
	this.shape.setTransform(913.5,350);

	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(843.5,350,1,1,0,0,0,566.8,306.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFF9D9").s().p("EhwfA2sMAAAhtXMDg/AAAMAAABtXg");
	this.shape_1.setTransform(720,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fieldPanel, new cjs.Rectangle(0,0,1442.9,700), null);


(lib.fiield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.FIELD2();
	this.instance.parent = this;
	this.instance.setTransform(316.3,202,1,1,0,0,0,334.4,207);

	this.instance_1 = new lib.field();
	this.instance_1.parent = this;
	this.instance_1.setTransform(452.4,150.9,1,1,0,0,0,316.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fiield, new cjs.Rectangle(0,0,632.7,403.9), null);


(lib.shadranimm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ShadranimTextbox();
	this.instance.parent = this;
	this.instance.setTransform(482.2,263,1.724,1.724,0,0,0,115.1,0.1);

	this.instance_1 = new lib.shadranim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1242,697.7,0.553,0.553,0,0,0,1207.1,414.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(210,210,209,0.227)").s().p("Eg5sAyAIOptzMBAEg7CIWT0jIHfmyIG6AAMhqFBkVg");
	this.shape.setTransform(694.9,352.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(210,210,209,0.227)").s().p("Eg7EAyJIAApTMBqtha+ILcAAMhxMBkRg");
	this.shape_1.setTransform(622.8,352.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(114,186,198,0.62)").s().p("EhJOAyJMAAAhkRMCSdAAAMAAABkRg");
	this.shape_2.setTransform(713.4,352.5);

	this.instance_2 = new lib.crowd();
	this.instance_2.parent = this;
	this.instance_2.setTransform(717.6,174.3,1.724,1.724,0,0,0,257.8,-2.3);

	this.instance_3 = new lib.crowd();
	this.instance_3.parent = this;
	this.instance_3.setTransform(701.3,321.3,1.724,1.724,0,0,0,257.9,-2.3);

	this.instance_4 = new lib.flash0ai();
	this.instance_4.parent = this;
	this.instance_4.setTransform(238.6,0,0.489,0.489);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#679245").s().p("Egr2Ay4IBnhjMBy9AAAMAAAhkMIA3AAMAAABlvgEhJkAy4IAAhjIOEAAIhrBjg");
	this.shape_3.setTransform(715.6,357.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBHEgFTIAAKmEhHDAFTIAAqm");
	this.shape_4.setTransform(462.2,-74.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0F7C9").s().p("EhwfA2sMAAAhtXMDg/AAAMAAABtXg");
	this.shape_5.setTransform(720,349.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadranimm, new cjs.Rectangle(0,-109.3,1440,809.2), null);


(lib.ending = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goal
	this.instance = new lib.Goal();
	this.instance.parent = this;
	this.instance.setTransform(285.4,-10.9,0.315,0.315,0,0,0,667.8,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).to({regX:668.1,scaleX:0.13,scaleY:0.13},3).to({regX:668.5,regY:0.6,scaleX:0.34,scaleY:0.34,x:285.5},3).to({regX:668.8,rotation:7.2},3).to({regX:668.9,regY:0.5,rotation:-7.8,x:285.6},3).to({regX:669,regY:0.4,rotation:7.2,x:285.7},3).to({regY:0.5,rotation:-7.8,x:285.6},4).to({regX:668.9,rotation:1.2},4).to({regX:669,rotation:-4.3},3).to({regX:669.1,regY:0.3,rotation:2.5,x:285.7},5).wait(6));

	// keeper
	this.instance_1 = new lib.keeper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(289.8,-35.4,0.221,0.221,-14.8,0,0,304.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:304.4,regY:-0.3,scaleX:0.22,scaleY:0.22,rotation:-14.9,x:289.2,y:-35.1},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:-14.7,x:288.6,y:-34.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-14.6,x:288.1,y:-34.5},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-14.5,x:287.6,y:-34.2},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-14.3,x:287.1,y:-33.9},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-14.2,x:286.6,y:-33.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-14.1,x:286.1,y:-33.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-14,x:285.6,y:-33},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-13.8,x:285.1,y:-32.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-13.7,x:284.5,y:-32.4},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-13.6,x:284,y:-32.1},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-13.4,x:283.5,y:-31.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-13.3,x:283,y:-31.4},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-13.2,x:282.5,y:-31.1},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-13,x:282,y:-30.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-12.9,x:281.5,y:-30.5},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-12.8,x:281,y:-30.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-12.6,x:280.4,y:-29.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-12.5,x:280,y:-29.6},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-12.4,x:279.4,y:-29.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-12.3,x:278.9,y:-29},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-12.1,x:278.4,y:-28.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-12,x:277.9,y:-28.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-11.9,x:277.4,y:-28.1},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-11.7,x:276.9,y:-27.8},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-11.6,x:276.4,y:-27.5},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-11.5,x:275.9,y:-27.2},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-11.3,x:275.3,y:-26.9},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-11.2,x:274.9,y:-26.6},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-11.1,x:274.3,y:-26.3},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-10.9,x:273.8,y:-26},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-10.8,x:273.3,y:-25.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-10.7,x:272.8,y:-25.4},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-10.6,x:272.3,y:-25.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-10.4,x:271.8,y:-24.8},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-10.3,x:271.3,y:-24.5},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-10.2,x:270.8,y:-24.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-10,x:270.3,y:-23.8},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-9.9,x:269.7,y:-23.6},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-9.8,x:269.2,y:-23.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-9.6,x:268.8,y:-22.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-9.5,x:268.2,y:-22.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-9.4,x:267.7,y:-22.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-9.3,x:267.2,y:-22},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-9.1,x:266.7,y:-21.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-9,x:266.2,y:-21.4},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-8.9,x:265.7,y:-21.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-8.7,x:265.2,y:-20.8},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-8.6,x:264.7,y:-20.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-8.5,x:264.2,y:-20.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-8.3,x:263.7,y:-19.9},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-8.2,x:263.1,y:-19.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-8.1,x:262.7,y:-19.3},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-8,x:262.1,y:-19},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-7.8,x:261.6,y:-18.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-7.7,x:261.1,y:-18.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-7.6,x:260.6,y:-18.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-7.4,x:260.1,y:-17.8},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-7.3,x:259.6,y:-17.5},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-7.2,x:259.1,y:-17.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-7,x:258.6,y:-16.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-6.9,x:258.1,y:-16.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-6.8,x:257.6,y:-16.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-6.7,x:257.1,y:-16},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-6.5,x:256.5,y:-15.7},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-6.4,x:256.1,y:-15.3},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-6.3,x:255.5,y:-15},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-6.1,x:255,y:-14.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-6,x:254.5,y:-14.4},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-5.9,x:254,y:-14.1},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5.8,x:253.5,y:-13.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5.6,x:253,y:-13.5},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5.5,x:252.5,y:-13.2},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5.4,x:252,y:-12.9},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5.2,x:251.5,y:-12.6},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5.1,x:251,y:-12.3},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-5,x:250.5,y:-12},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-4.8,x:250,y:-11.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-4.7,x:249.5,y:-11.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-4.6,x:249,y:-11.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-4.5,x:248.5,y:-10.8},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-4.3,x:248,y:-10.5},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-4.2,x:247.4,y:-10.2},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-4.1,x:247,y:-9.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-3.9,x:246.4,y:-9.6},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-3.8,x:245.9,y:-9.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-3.7,x:245.5,y:-9},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-3.6,x:244.9,y:-8.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-3.4,x:244.4,y:-8.4},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-3.3,x:243.9,y:-8.1},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-3.2,x:243.4,y:-7.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-3,x:242.9,y:-7.5},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-2.9,x:242.4,y:-7.2},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-2.8,x:241.9,y:-6.9},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-2.7,x:241.4,y:-6.6},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-2.5,x:240.9,y:-6.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-2.4,x:240.4,y:-6},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-2.3,x:239.9,y:-5.7},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-2.1,x:239.4,y:-5.4},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-2,x:238.9,y:-5.1},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-1.9,x:238.4,y:-4.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1.8,x:237.9,y:-4.5},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1.6,x:237.4,y:-4.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1.5,x:236.9,y:-3.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1.4,x:236.4,y:-3.6},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1.2,x:235.9,y:-3.2},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1.1,x:235.4,y:-3},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1,x:234.9,y:-2.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-0.9,x:234.3,y:-2.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-0.7,x:233.8,y:-2.1},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-0.6,x:233.3,y:-1.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-0.5,x:232.8,y:-1.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-0.3,x:232.3,y:-1.1},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-0.2,x:231.8,y:-0.8},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-0.1,x:231.3,y:-0.5},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:0,x:230.9,y:-0.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:0.2,x:230.3,y:0},0).wait(1).to({regX:304.9,regY:-0.1,rotation:0,x:230.6,y:0.1},0).wait(1).to({regX:304.4,regY:-0.3,x:230.9,y:-0.2},0).wait(1).to({x:231.4,y:-0.5},0).wait(1).to({x:231.9,y:-0.8},0).wait(1).to({x:232.4,y:-1.2},0).wait(1).to({x:232.9,y:-1.5},0).wait(1).to({x:233.4,y:-1.8},0).wait(1).to({x:233.9,y:-2.2},0).wait(1).to({x:234.4,y:-2.5},0).wait(1).to({x:234.9,y:-2.8},0).wait(1).to({x:235.4,y:-3.1},0).wait(1).to({x:235.9,y:-3.5},0).wait(1).to({x:236.4,y:-3.8},0).wait(1).to({x:236.9,y:-4.1},0).wait(1).to({x:237.4,y:-4.4},0).wait(1).to({x:237.9,y:-4.8},0).wait(1).to({x:238.4,y:-5.1},0).wait(1).to({x:238.9,y:-5.4},0).wait(1).to({x:239.4,y:-5.8},0).wait(1).to({x:239.9,y:-6.1},0).wait(1).to({x:240.4,y:-6.4},0).wait(1).to({x:240.9,y:-6.7},0).wait(1).to({x:241.4,y:-7.1},0).wait(1).to({x:241.9,y:-7.4},0).wait(1).to({x:242.4,y:-7.7},0).wait(1).to({x:242.9,y:-8},0).wait(1).to({x:243.4,y:-8.4},0).wait(1).to({x:243.9,y:-8.7},0).wait(1).to({x:244.4,y:-9},0).wait(1).to({x:244.9,y:-9.4},0).wait(1).to({x:245.4,y:-9.7},0).wait(1).to({x:245.9,y:-10},0).wait(1).to({x:246.4,y:-10.3},0).wait(1).to({x:246.9,y:-10.7},0).wait(1).to({x:247.4,y:-11},0).wait(1).to({x:247.9,y:-11.3},0).wait(1).to({x:248.4,y:-11.7},0).wait(1).to({x:248.9,y:-12},0).wait(1).to({x:249.4,y:-12.3},0).wait(1).to({x:249.9,y:-12.6},0).wait(1).to({x:250.4,y:-13},0).wait(1).to({x:250.9,y:-13.3},0).wait(1).to({x:251.4,y:-13.6},0).wait(1).to({x:251.8,y:-13.8},0).wait(1).to({x:252.2,y:-14},0).wait(1).to({x:252.6,y:-14.2},0).wait(1).to({x:253,y:-14.4},0).wait(1).to({x:253.4,y:-14.6},0).wait(1).to({x:253.8,y:-14.8},0).wait(1).to({x:254.3,y:-15},0).wait(1).to({x:254.7,y:-15.2},0).wait(1).to({x:255.1,y:-15.3},0).wait(1).to({x:255.5,y:-15.5},0).wait(1).to({x:255.9,y:-15.7},0).wait(1).to({x:256.3,y:-15.9},0).wait(1).to({x:256.7,y:-16.1},0).wait(1).to({x:257.1,y:-16.3},0).wait(1).to({x:257.5,y:-16.5},0).wait(1).to({x:257.9,y:-16.7},0).wait(1).to({x:258.3,y:-16.9},0).wait(1).to({x:258.8,y:-17.1},0).wait(1).to({x:259.2,y:-17.3},0).wait(1).to({x:259.6,y:-17.5},0).wait(1).to({x:260,y:-17.7},0).wait(1).to({x:260.4,y:-17.8},0).wait(1).to({x:260.8,y:-18},0).wait(1).to({x:261.2,y:-18.2},0).wait(1).to({x:261.6,y:-18.4},0).wait(1).to({x:262,y:-18.6},0).wait(1).to({x:262.4,y:-18.8},0).wait(1).to({x:262.8,y:-19},0).wait(1).to({x:263.2,y:-19.2},0).wait(1).to({x:263.7,y:-19.4},0).wait(1).to({x:264.1,y:-19.6},0).wait(1).to({x:264.5,y:-19.8},0).wait(1).to({x:264.9,y:-20},0).wait(1).to({x:265.3,y:-20.2},0).wait(1).to({x:265.7,y:-20.3},0).wait(1).to({x:266.1,y:-20.5},0).wait(1).to({x:266.5,y:-20.7},0).wait(1).to({x:266.9,y:-20.9},0).wait(1).to({x:267.3,y:-21.1},0).wait(1).to({x:267.7,y:-21.3},0).wait(1).to({x:268.2,y:-21.5},0).wait(1).to({x:268.6,y:-21.7},0).wait(1).to({x:269,y:-21.9},0).wait(1).to({x:269.4,y:-22.1},0).wait(1).to({x:269.8,y:-22.3},0).wait(1).to({x:270.2,y:-22.5},0).wait(1).to({x:270.6,y:-22.7},0).wait(1).to({x:271,y:-22.8},0).wait(1).to({x:271.4,y:-23},0).wait(1).to({x:271.8,y:-23.2},0).wait(1).to({x:272.2,y:-23.4},0).wait(1).to({x:272.6,y:-23.6},0).wait(38));

	// ball
	this.instance_2 = new lib.ball();
	this.instance_2.parent = this;
	this.instance_2.setTransform(277.6,86.5,1,1,0,0,0,48.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:48.5,regY:0.8,rotation:-3.1,x:277.7,y:87.2},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-9.2,x:277.8},0).wait(1).to({rotation:-12.3},0).wait(1).to({rotation:-15.4,y:87.1},0).wait(1).to({rotation:-18.5},0).wait(1).to({rotation:-21.5,x:277.9},0).wait(1).to({rotation:-24.6},0).wait(1).to({rotation:-27.7},0).wait(1).to({rotation:-30.8},0).wait(1).to({rotation:-33.8,x:278,y:87},0).wait(1).to({rotation:-36.9},0).wait(1).to({rotation:-40},0).wait(1).to({rotation:-43.1,x:278.1},0).wait(1).to({rotation:-46.2,y:86.9},0).wait(1).to({rotation:-49.2},0).wait(1).to({rotation:-52.3},0).wait(1).to({rotation:-55.4,y:86.8},0).wait(1).to({rotation:-58.5,x:278.2},0).wait(1).to({rotation:-61.5},0).wait(1).to({rotation:-64.6},0).wait(1).to({rotation:-67.7,y:86.7},0).wait(1).to({rotation:-70.8,y:86.6},0).wait(1).to({rotation:-73.8},0).wait(1).to({rotation:-76.9},0).wait(1).to({rotation:-80},0).wait(1).to({rotation:-83.1,y:86.5},0).wait(1).to({rotation:-86.2},0).wait(1).to({rotation:-89.2,y:86.4},0).wait(1).to({rotation:-92.3},0).wait(1).to({rotation:-95.4},0).wait(1).to({rotation:-98.5},0).wait(1).to({rotation:-101.5},0).wait(1).to({rotation:-104.6,x:278.1,y:86.3},0).wait(1).to({rotation:-107.7},0).wait(1).to({rotation:-110.8,y:86.2},0).wait(1).to({rotation:-113.8},0).wait(1).to({rotation:-116.9},0).wait(1).to({rotation:-120,y:86.1},0).wait(1).to({rotation:-123.1,x:278},0).wait(1).to({rotation:-126.2},0).wait(1).to({rotation:-129.2},0).wait(1).to({rotation:-132.3,y:86},0).wait(1).to({rotation:-135.4,x:277.9,y:86.1},0).wait(1).to({rotation:-138.5,y:86},0).wait(1).to({rotation:-141.5},0).wait(1).to({rotation:-144.6,x:277.8,y:85.9},0).wait(1).to({rotation:-147.7},0).wait(1).to({rotation:-150.8},0).wait(1).to({rotation:-153.8,x:277.7},0).wait(1).to({rotation:-156.9},0).wait(1).to({rotation:-160},0).wait(1).to({rotation:-163.1},0).wait(1).to({rotation:-166.2,x:277.6},0).wait(1).to({rotation:-169.2},0).wait(1).to({rotation:-172.3,x:277.5},0).wait(1).to({rotation:-175.4},0).wait(1).to({rotation:-178.5,x:277.4},0).wait(1).to({rotation:-181.5},0).wait(1).to({rotation:-184.6},0).wait(1).to({rotation:-187.7},0).wait(1).to({rotation:-190.8,x:277.3},0).wait(1).to({rotation:-193.8},0).wait(1).to({rotation:-196.9,x:277.2,y:86},0).wait(1).to({rotation:-200,x:277.3},0).wait(1).to({rotation:-203.1,x:277.2},0).wait(1).to({rotation:-206.2,y:86.1},0).wait(1).to({rotation:-209.2,y:86},0).wait(1).to({rotation:-212.3,x:277.1},0).wait(1).to({rotation:-215.4,y:86.1},0).wait(1).to({rotation:-218.5,x:277},0).wait(1).to({rotation:-221.5},0).wait(1).to({rotation:-224.6,x:277.1,y:86.2},0).wait(1).to({rotation:-227.7,x:277},0).wait(1).to({rotation:-230.8},0).wait(1).to({rotation:-233.8,y:86.3},0).wait(1).to({rotation:-236.9},0).wait(1).to({rotation:-240,x:276.9},0).wait(1).to({rotation:-243.1,y:86.4},0).wait(1).to({rotation:-246.2},0).wait(1).to({rotation:-249.2},0).wait(1).to({rotation:-252.3},0).wait(1).to({rotation:-255.4,y:86.5},0).wait(1).to({rotation:-258.5},0).wait(1).to({rotation:-261.5},0).wait(1).to({rotation:-264.6,y:86.6},0).wait(1).to({rotation:-267.7},0).wait(1).to({rotation:-270.8,y:86.7},0).wait(1).to({rotation:-273.8},0).wait(1).to({rotation:-276.9},0).wait(1).to({rotation:-280,y:86.8},0).wait(1).to({rotation:-283.1},0).wait(1).to({rotation:-286.2,x:277},0).wait(1).to({rotation:-289.2,x:276.9,y:86.9},0).wait(1).to({rotation:-292.3,x:277},0).wait(1).to({rotation:-295.4},0).wait(1).to({rotation:-298.5,y:87},0).wait(1).to({rotation:-301.5},0).wait(1).to({rotation:-304.6,x:277.1},0).wait(1).to({rotation:-307.7,y:87.1},0).wait(1).to({rotation:-310.8,y:87},0).wait(1).to({rotation:-313.8,y:87.1},0).wait(1).to({rotation:-316.9,x:277.2},0).wait(1).to({rotation:-320},0).wait(1).to({rotation:-323.1,y:87.2},0).wait(1).to({rotation:-326.2,x:277.3,y:87.1},0).wait(1).to({rotation:-329.2,y:87.2},0).wait(1).to({rotation:-332.3,x:277.4},0).wait(1).to({rotation:-335.4},0).wait(1).to({rotation:-338.5},0).wait(1).to({rotation:-341.5},0).wait(1).to({rotation:-344.6,x:277.5},0).wait(1).to({rotation:-347.7},0).wait(1).to({rotation:-350.8},0).wait(1).to({rotation:-353.8},0).wait(1).to({rotation:-356.9,x:277.6},0).wait(1).to({rotation:-360,x:277.7},0).wait(1).to({regX:48.4,regY:0.1,x:277,y:86.5},0).wait(1).to({regX:48.5,regY:0.8,scaleX:0.99,scaleY:0.99,rotation:-363.7,x:278.4,y:85.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-367.5,x:279.7,y:84.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-371.2,x:281,y:83},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-375,x:282.4,y:81.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-378.7,x:283.7,y:80.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-382.5,x:285,y:78.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-386.2,x:286.3,y:77.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-390,x:287.6,y:75.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-393.7,x:288.9,y:74.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-397.5,x:290.2,y:73},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-401.2,x:291.5,y:71.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-405,x:292.8,y:70.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-408.7,x:294.1,y:68.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-412.5,x:295.4,y:67.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-416.2,x:296.7,y:65.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-420,x:298,y:64.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-423.7,x:299.3,y:63},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-427.5,x:300.5,y:61.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-431.2,x:301.8,y:60.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-435,x:303.1,y:58.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-438.7,x:304.4,y:57.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-442.5,x:305.7,y:55.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-446.2,x:306.9,y:54.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-450,x:308.2,y:53},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-453.7,x:309.5,y:51.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-457.5,x:310.7,y:50.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-461.2,x:312,y:48.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-465,x:313.2,y:47.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-468.7,x:314.5,y:45.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-472.5,x:315.7,y:44.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-476.2,x:317,y:43},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-480,x:318.2,y:41.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-483.7,x:319.5,y:40.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-487.5,x:320.7,y:38.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-491.2,x:322,y:37.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-495,x:323.3,y:35.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-498.7,x:324.5,y:34.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-502.5,x:325.8,y:33.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-506.2,x:327,y:31.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-510,x:328.2,y:30.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-513.7,x:329.5,y:28.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-517.5,x:330.7,y:27.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-521.2,x:332,y:26.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-525,x:333.2,y:24.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-528.7,x:334.4,y:23.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-532.5,x:335.7,y:21.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-536.2,x:336.9,y:20.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-540,x:338.2,y:19.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-543.7,x:339.4,y:17.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-547.5,x:340.7,y:16.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-551.2,x:341.9,y:15},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-555,x:343.2,y:13.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-558.7,x:344.4,y:12.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-562.5,x:345.7,y:10.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-566.2,x:346.9,y:9.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-570,x:348.2,y:8.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-573.7,x:349.4,y:6.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-577.5,x:350.7,y:5.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-581.2,x:352,y:3},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-585,x:353.5,y:0.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-588.7,x:354.8,y:-1.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-592.5,x:356.2,y:-4.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-596.2,x:357.5,y:-6.9},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-600,x:359,y:-9.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-603.7,x:360.3,y:-11.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-607.5,x:361.7,y:-14.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-611.2,x:363.1,y:-16.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-615,x:364.4,y:-19.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-618.7,x:365.9,y:-21.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:-622.5,x:367.3,y:-24},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:-626.2,x:368.6,y:-26.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-630,x:370.1,y:-28.9},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-633.7,x:371.4,y:-31.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-637.5,x:372.9,y:-33.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-641.2,x:374.2,y:-36.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:-645,x:375.6,y:-38.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-648.7,x:377,y:-41.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-652.5,x:378.4,y:-43.7},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-656.2,x:379.8,y:-46.1},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-660,x:381.2,y:-48.6},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-663.7,x:382.7,y:-51.1},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-667.5,x:384.1,y:-53.5},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-671.2,x:385.5,y:-56},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-675,x:386.9,y:-58.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:-678.7,x:388.3,y:-61},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-682.5,x:389.7,y:-63.4},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-686.2,x:391.1,y:-65.9},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-690,x:392.5,y:-68.3},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-693.7,x:393.9,y:-70.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:-697.5,x:395.4,y:-73.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:-701.2,x:396.8,y:-75.8},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-705,x:398.2,y:-78.3},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:-708.7},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:-712.5,x:398.3},0).wait(38));

	// stage
	this.instance_3 = new lib.fiield();
	this.instance_3.parent = this;
	this.instance_3.setTransform(316.4,0,1,1,0,0,0,316.4,201.9);

	this.instance_4 = new lib.field();
	this.instance_4.parent = this;
	this.instance_4.setTransform(452.4,-51,1,1,0,0,0,316.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},95).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:276.1,scaleX:1.01,scaleY:1.01,x:274.7,y:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:273.2,y:2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:271.8,y:3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:270.3,y:4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:268.9,y:5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:267.4,y:6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:266,y:6.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:264.5,y:7.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:263,y:8.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:261.6,y:9.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:260.1,y:10.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:258.7,y:11.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:257.2,y:12.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:255.8,y:13.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:254.3,y:14.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:252.9,y:15.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:251.4,y:16.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:249.9,y:17.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:248.5,y:18.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:247,y:19.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:245.6,y:20.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:244.1,y:21.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:242.7,y:22.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:241.2,y:23.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:239.7,y:24.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:238.3,y:25.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:236.8,y:26.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:235.4,y:27.7},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:233.9,y:28.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:232.5,y:29.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:231,y:30.7},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:229.6,y:31.7},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:228.1,y:32.7},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:226.6,y:33.7},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:225.2,y:34.7},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:223.7,y:35.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:222.3,y:36.6},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:220.8,y:37.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:219.4,y:38.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:217.9,y:39.6},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:216.5,y:40.6},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:215,y:41.6},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:213.5,y:42.6},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:212.1,y:43.6},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:210.6,y:44.5},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:209.2,y:45.5},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:207.7,y:46.5},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:206.3,y:47.5},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:204.8,y:48.5},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:203.3,y:49.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:201.9,y:50.5},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:200.4,y:51.5},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:199,y:52.5},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:197.5,y:53.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:196.1,y:54.4},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:194.6,y:55.4},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:193.2,y:56.4},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:191.7,y:57.4},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:190.2,y:58.4},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:188.8,y:59.4},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:187.3,y:60.4},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:185.9,y:61.4},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:184.4,y:62.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:183,y:63.3},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:181.5,y:64.3},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:180,y:65.3},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:178.6,y:66.3},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:177.1,y:67.3},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:175.7,y:68.3},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:174.2,y:69.3},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:172.8,y:70.3},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:171.3,y:71.3},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:169.9,y:72.2},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:168.4,y:73.2},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:166.9,y:74.2},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:165.5,y:75.2},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:164,y:76.2},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:162.6,y:77.2},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:161.1,y:78.2},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:159.7,y:79.2},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:158.2,y:80.2},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:156.8,y:81.2},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:155.3,y:82.1},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:153.8,y:83.1},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:152.4,y:84.1},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:150.9,y:85.1},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:149.5,y:86.1},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:148,y:87.1},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:146.6,y:88.1},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:145.1,y:89.1},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:143.6,y:90.1},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:142.2,y:91},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:140.7,y:92},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:139.3,y:93},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:137.8,y:94},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:136.4,y:95},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:134.9,y:96},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:133.5,y:96.9},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:132,y:97.9},0).wait(1).to({scaleX:1.69,scaleY:1.69,x:130.5,y:98.9},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:129.1,y:99.9},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:127.6,y:100.9},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:126.2,y:101.9},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:124.7,y:102.9},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:123.3,y:103.9},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:121.8,y:104.9},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:120.4,y:105.8},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:118.9,y:106.8},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:117.4,y:107.8},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:116,y:108.8},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:114.5,y:109.8},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:113.1,y:110.8},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:111.6,y:111.8},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:110.2,y:112.8},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:108.7,y:113.8},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:107.2,y:114.7},0).wait(1).to({scaleX:1.81,scaleY:1.81,x:105.8,y:115.7},0).wait(1).to({regX:316.4,x:178.5},0).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-201.9,632.7,403.9);


(lib.endingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ending();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-89.4,2.608,2.608,0,0,0,0.1,-201.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0F7C9").s().p("EhwkA22MAAAhtrMDhJAAAMAAABtrg");
	this.shape.setTransform(541.2,263.6,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endingMC, new cjs.Rectangle(0,-89.9,1650.3,1053.4), null);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var selfHome = this;
		createjs.Sound.registerSound("./sounds/shadranimSound.mp3", "shadranimSound");
		createjs.Sound.registerSound("./sounds/crowdSound.mp3", "crowdSound");
		createjs.Sound.registerSound("./sounds/refBlow.mp3", "refBlow");
		// שיוך למחלקת גאווה סקריפט //
		c = createjs;
		// שיוך משתנים גלובליים עם ערך גודל הבמה //
		w = stage.canvas.width;
		h = stage.canvas.height;
		// // יצירת "מחזיק" לכל הגרפיקה אם נרצה להסיר הכל בבת אחת
		game = new c.Container();
		// הצבה לבמה
		stage.addChild(game);
		WebFontConfig = {
			google: {
				families: ['Assistant']
			}
		};
		//הוספות דינאמיות של קבצי סאונד
		
		
		(function () {
			var wf = document.createElement('script');
			wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
		
			s.parentNode.insertBefore(wf, s);
		})();
		
		$("#canvas").css("direction", "rtl"); // כיוון כתיבת הטקסט ימין לשמאל
		
		var myJSON; //מחזיק את הג'ייסון שחוזר עם הפריטים של המשחק
		var gameCodeUser; //הקוד שהמשתמש מקליד בתיבת הטקסט
		var counter = 0; //מונה שמראה מה השאלה הבאה שצריך להציג
		var numberOfQustion; //כמות השאלות שיש במשחק
		var gameArr = []; //המערך שיכיל את כל הפריטים של המשחק אחרי ההמרה מהג'ייסון
		var qnum = 0;
		var score; //משתנה לציון שיתאפס בכל פעם שיתחיל משחק חדש (בפונקציית אנימציית הפתיחה)
		var tempPlayerNumber; //מספר השחקן שיהיה באותו רגע עם הכדור, בהתחלה זה יהיה שחקן מספר 1.
		var beforePlayerNumber; //מספר השחקן הקודם שהיה עם הכדור
		var qcounter;
		var TT; // משתנה שיספור את הסמן הכולל
		var freindly = [
			[
				[420, 590],
				[325, 520],
				[550, 470],
				[315, 240],
				[545, 270]
			],
		];
		
		var rivals = [
			[
				[390, 400],
				[510, 330],
				[365, 140],
				[580, 150],
				[460, 77]
			],
		];
		var rightOrWrong;
		var tempPlayerX = 0;
		var tempPlayerY = 0;
		var lastqnum = 0;
		var anum = 0; //מספר זמני
		var tempQuestion = []; //מערך זמני למספרי שאלות
		var numberOfAnswer = 0;
		var answerPressedX = 0;
		var answerPressedY = 0;
		var target = "";
		var directionX = 0;
		var directionY = 0
		var lastAnsPicY = 0; //מיקום תמונת התשובה האחרונה
		var gameCodeInput;
		var mygametitle = "";
		var isRestart = false;
		var player4PositionX = 545;
		var player4PositionY = 270;
		
		
		chooseScreen();
		//מסך בחירת משחק
		function chooseScreen() {
		
			stage.removeAllChildren();
			var ChooseAN = new lib.Choose();
			stage.addChild(ChooseAN);
			gameCodeInput = new lib.gameCodeInput();
			gameCodeInput.x = 700;
			gameCodeInput.y = 90;
			stage.addChild(gameCodeInput);
			gameCodeInput.name = "gameCodeInput";
			gameCodeInput.play_btn.alpha = 0.3;
		
		}
		//בשינוי תיבת הטקסט
		$("#dom_overlay_container").on("keyup", "#gameCode_txt", myinput_change);
		
		//עיצוב לפונט טקסטבוקס
		setTimeout(function () {
			// dom_overlay_container is a global reference to a div element created by Animate CC. "txt" is the instance name of your component  
			textInput = dom_overlay_container.children["gameCode_txt"];
			textInput.style.fontSize = "28px";
			textInput.style.fontFamily = "'Assistant'";
		}, 0);
		function myinput_change(evt) {
		
			//אם הערך לא השתנה
			if (document.getElementById("gameCode_txt").value == "") {
				//ניטרול כפתור "בחר
				gameCodeInput.play_btn.alpha = 0.3;
				gameCodeInput.play_btn.removeEventListener("click", initProgram);
			} else {
				//אחרי שהתיבה לא ריקה נאפשר לחיצה
				gameCodeInput.play_btn.alpha = 1;
				gameCodeInput.play_btn.addEventListener("click", initProgram);
			}
		}
		
		//פונקציה שפועלת אחרי הזנת קוד בתיבת הטקסט
		function initProgram() {
			stage.getChildByName("gameCodeInput").play_btn.alpha = 1;
			stage.removeChild(stage.getChildByName("errorAlert"));
			console.log("init Program works");
			if (isRestart == false) {
				gameCodeUser = gameCode_txt.value;
			}
			var errorAlert = new createjs.Text();
			errorAlert.name = "errorAlert";
			errorAlert.textAlign = "right";
			errorAlert.color = "#FF0000";
			errorAlert.x = 696;
			errorAlert.y = 130;
			errorAlert.font = '13pt Assistant';
			stage.addChild(errorAlert);
		
			//משתנה - קוד המשחק
			//שליחת בקשה לשרת לקבל את הפריטים ששייכים למשחק שיש לו את הקוד שהוקלד בתיבת הטקסט
			$.post("/Handler.ashx", {
				gameCode: gameCodeUser //פרמטר שנמצא בקובץ הנדלר ומקבל אליו את קוד המשחק
		
			})
			//בקובץ ההנדלר השרת שולח אלינו רצף טקסט שמכיל את הפריטים של המשחק בתצורה של ג'ייסון
			//response = התגעובה שהשרת מחזיר.		
			.done(function (response) { //אם הפנייה לשרת הסתיימה בהצלחה
		
		
				if (response == "לא נמצא משחק") {
					console.log(response);
					stage.getChildByName("gameCodeInput").play_btn.alpha = 0.3;
					errorAlert.text = "לא נמצא משחק";
					document.getElementById("gameCode_txt").value = "";
				} else {
					console.log(response);
					myJSON = JSON.parse(response);
					console.log(myJSON);
		
		
					fillArray();
				}
			})
				.fail(function () { //אפ הפנייה לשרת לא הצליחה
					errorAlert.text = "בעיית שרת";
					document.getElementById("gameCode_txt").value = "";
				});
		}
		
		//פונקציה שלוקחת את מה שנמצא בקוד הג'ייסון שיצרנו וממירה אותו למערך
		function fillArray() {
			numberOfQustion = myJSON.game.question.length;
		
			for (i = 0; i < numberOfQustion; i++) {
				var myQtext = myJSON.game.question[i]['@text'];
				var tempmyQtext = (myJSON.game.question[i]['@text']).replace(/\+/g, '%20');
				myQtext = decodeURIComponent(tempmyQtext);
				var myQpic = myJSON.game.question[i]['@pic'];
				var myTimePerTask = myJSON.game['@timePerTask'];
		
				var tryCount = 1;
				var qArr = [myQtext, myQpic, myTimePerTask, tryCount];
				var qAnsNum = myJSON.game.question[i].answer.length;
				var wholeQuestion = [];
		
		
				for (j = 0; j <= qAnsNum; j++) {
					if (j == 0) {
						wholeQuestion[j] = qArr;
					} else {
						var myAns = myJSON.game.question[i].answer[j - 1]['#text'];
						var tempmyAns = (myJSON.game.question[i].answer[j - 1]['#text']).replace(/\+/g, '%20');
						myAns = decodeURIComponent(tempmyAns);
						var ansCorrect = myJSON.game.question[i].answer[j - 1]['@correct'];
						var qAnsType = myJSON.game.question[i]['@ansType'];
						var ansArr = [myAns, ansCorrect, qAnsType];
						wholeQuestion[j] = ansArr;
					}
		
				}
				console.log(wholeQuestion);
				gameArr.push(wholeQuestion);
			}
			console.log(gameArr);
		
			/*
																						לפני שמתחילים את המשחק חשוב מאוד לשים לב שהמערך שנוצר לכם כרגע נראה בדיוק כמו המערך שיש לכם למשחק של סמסטר א
																					*/
			console.log("sdfsd " + myJSON.game['@published']);
			if (myJSON.game['@published'] == "false") {
				stage.removeChild(stage.getChildByName("errorAlert"));
				var errorAlert = new createjs.Text();
				errorAlert.name = "errorAlert";
				errorAlert.textAlign = "right";
				errorAlert.color = "#FF0000";
				errorAlert.x = 696;
				errorAlert.y = 130;
				errorAlert.font = '13pt Assistant';
				errorAlert.text = "משחק לא פורסם";
				document.getElementById("gameCode_txt").value = "";
				stage.addChild(errorAlert);
				stage.getChildByName("gameCodeInput").play_btn.alpha = 1;
		
			} else {
				shadranim(); //מתחיל את המשחק
			}
		
		}
		
		//פונקציה למסך השדרנים ולכפתור התחלת המשחק
		function shadranim() {
			tempPlayerNumber = 1; //מספר השחקן שיהיה באותו רגע עם הכדור, בהתחלה זה יהיה שחקן מספר 1.
			beforePlayerNumber = 1; //מספר השחקן הקודם שהיה עם הכדור
			qcounter = 1;
			TT = 0; // הזמן הכולל יתאפס כהמשחק יעלה
			createjs.Sound.stop("crowdSound");
			score = 0; //איפוס הזמן בכל משחק חדש
			createjs.Sound.play("shadranimSound");
			stage.removeAllChildren();
			var shadranimscreen = new lib.shadranimm();
			shadranimscreen.name = "shadar";
			stage.addChild(shadranimscreen);
		
		
		
			var startgame = new lib.startGameBtn();
			stage.addChild(startgame);
			startgame.name = "startgameBtn";
			startgame.x = 350;
			startgame.y = 527;
			startgame.addEventListener("click", field);
		}
		
		function field() { //במת המשחק
		
			createjs.Sound.stop("shadranimSound");
			createjs.Sound.play("crowdSound", "none", 0, 0, -1, 0.1);
			stage.removeAllChildren();
			var field = new lib.fieldPanel;
			stage.addChild(field);
			console.log(myJSON.game.title);
			var NameOfClass = new createjs.Text();
			NameOfClass.font = '18pt Assistant';
			NameOfClass.name = "nameOfclass";
			NameOfClass.textAlign = "center";
			mygametitle = myJSON.game.title;
			var tempmygametitle = (myJSON.game.title).replace(/\+/g, '%20');
			mygametitle = decodeURIComponent(tempmygametitle);
			NameOfClass.text = mygametitle;
			NameOfClass.x = 920;
			NameOfClass.y = 65;
			stage.addChild(NameOfClass);
			var audioIcon = new lib.onOffAudio;
			stage.addChild(audioIcon);
			audioIcon.x = 690;
			audioIcon.y = 90;
			audioIcon.gotoAndStop(0);
			audioIcon.addEventListener("click", audio);
			audioIcon.name = "audioOn";
		
			var ball = new lib.ballMC;
			stage.addChild(ball);
			ball.x = (freindly[0][1][0]) + 40;
			ball.y = (freindly[0][1][1]) - 3
			3;
			ball.name = "ball";
		
			for (i = 0; i < 5; i++) { //יצירה דינאמית של שחקני הקבוצה
				var player = new lib.player();
				player.x = freindly[0][i][0];
				player.y = freindly[0][i][1];
				stage.addChild(player);
				player.name = "friendly" + i;
				player.alpha = 1;
		
				var rival = new lib.rival();
				rival.y = rivals[0][i][1];
				rival.x = rivals[0][i][0];
				stage.addChild(rival);
				rival.name = "rival" + i;
		
			}
		
			var howMuch = new createjs.Text(); //יצירה של תיבת טקסט דינאמית בשביל קאונטר לכמות שאלות שעברנו
			howMuch.name = "howMuch";
			howMuch.lineWidth = 200;
			howMuch.lineHeight = 30;
			howMuch.textAlign = "right";
			howMuch.width = 30;
			howMuch.x = 1140;
			howMuch.y = 100;
			howMuch.text = "";
			stage.addChild(howMuch);
			howMuch.font = '15pt Assistant';
			panel();
		
		}
		
		function audio(evt) {
			if (evt.currentTarget.name == "audioOn") {
				createjs.Sound.volume = 0;
				evt.currentTarget.gotoAndStop(1);
				evt.currentTarget.name = "audioOof";
			} else {
				console.log("voiceon");
				createjs.Sound.volume = 1;
				evt.currentTarget.gotoAndStop(0);
				evt.currentTarget.name = "audioOn";
			}
		}
		
		function panel() //מה יוצא בפאנל
		{
		
			if (rightOrWrong == false) {
				stage.getChildByName("ball").x = stage.getChildByName("friendly" + beforePlayerNumber).x;
				stage.getChildByName("ball").y = stage.getChildByName("friendly" + beforePlayerNumber).y - 13;
			}
			stage.removeChild(stage.getChildByName("clock"));
			stage.removeChild(stage.getChildByName("timesUp"));
			stage.removeChild(stage.getChildByName("qtxt"));
			stage.removeChild(stage.getChildByName("nextBtn"));
			stage.removeChild(stage.getChildByName("qpic"));
		
			for (i = 1; i < 5; i++) {
				stage.removeChild(stage.getChildByName("radio" + i));
				stage.removeChild(stage.getChildByName("anstxt"));
				stage.removeChild(stage.getChildByName("anspic" + i));
		
			}
			stage.removeChild(stage.getChildByName("greenV"));
			stage.removeChild(stage.getChildByName("redX"));
		
		
			var forpasstxt = new createjs.Text();
			forpasstxt.name = "forpass";
			forpasstxt.lineWidth = 260;
			forpasstxt.lineHeight = 30;
			forpasstxt.textAlign = "center";
		
			if (gameArr.length == 1) {
				forpasstxt.text = "כדי לבעוט לשער לחצו על השער!!!";
			} else {
		
				if (gameArr.length == 2) {
					forpasstxt.text = "לחצו על החלוץ כדי למסור אליו!";
				} else {
					forpasstxt.text = "החליטו למי מהשחקנים המהבהבים תרצו למסור ולחצו עליו";
				}
			}
		
		
			forpasstxt.x = 920;
			forpasstxt.y = 270;
			stage.addChild(forpasstxt);
			forpasstxt.font = '22px Assistant';
		
			for (i = 1; i < 5; i++) {
				stage.removeChild(stage.getChildByName("ansBtn" + i));
			}
			stage.removeChild(stage.getChildByName("greenV"));
			stage.removeChild(stage.getChildByName("redX"));
		
			for (i = 0; i < 5; i++) {
				stage.getChildByName("friendly" + i).gotoAndStop(0);
				stage.getChildByName("friendly" + i).rotation = Math.floor(Math.random() * -45);
				stage.getChildByName("rival" + i).rotation = Math.floor(Math.random() * 45);
			}
			stage.getChildByName("howMuch").text = "שאלה מספר: " + qcounter + "/" + numberOfQustion;
			createListeners();
		
		}
		
		function createListeners() //יוצרת בכל פעם איבנטליסטנרים לשני שחקנים רנדומליים על המגרש כדי שיהיה אפשר למסור להם
		{
		
		
			if (gameArr.length < 3) //במקרה ונשארו שתי שאלות
			{
				if (gameArr.length == 2) //אם זו השאלה לפני האחרונה הכדור יוכל להימסר רק לחלוץ
				{
					rndListener1 = 4;
					rndListener2 = 4;
					stage.getChildByName("friendly" + rndListener1).addEventListener("click", question);
					stage.getChildByName("friendly" + rndListener1).gotoAndPlay(2);
				} else { //אם זו השאלה האחרונה יווצר איבנט ליסטנר על השער
					var Lastshot = new lib.Lastshot();
					Lastshot.y = 80;
					Lastshot.x = 440;
					stage.addChild(Lastshot);
					Lastshot.name = "Lastshot";
					stage.getChildByName("Lastshot").addEventListener("click", question);
				}
			} else {
		
				rndListener1 = Math.floor(Math.random() * 4);
				rndListener2 = Math.floor(Math.random() * 4);
		
				while (rndListener1 == beforePlayerNumber) {
					rndListener1 = Math.floor(Math.random() * 4)
				}
		
				while (rndListener2 == beforePlayerNumber || rndListener2 == rndListener1) {
					rndListener2 = Math.floor(Math.random() * 4)
				}
		
				console.log("זה שני המספר שהוגרלו" + rndListener2 + " " + rndListener1);
		
				stage.getChildByName("friendly" + rndListener1).addEventListener("click", question);
				stage.getChildByName("friendly" + rndListener1).gotoAndPlay(2);
		
				stage.getChildByName("friendly" + rndListener2).addEventListener("click", question);
				stage.getChildByName("friendly" + rndListener2).gotoAndPlay(2);
		
		
		
			}
		
			alphas();
		
		
		}
		
		function alphas() //פונקציה שעושה פייד לכל השחקנים הלא לחיצים
		{
			for (i = 0; i < 5; i++) {
				if (i != rndListener1 && i != rndListener2 && i != beforePlayerNumber) {
					stage.getChildByName("friendly" + i).alpha = 0.4;
				} else {
					stage.getChildByName("friendly" + i).alpha = 1;
				}
		
		
			}
		}
		
		function question(evt) {
			var instruction = new createjs.Text(); //הוראה לסימון התשובה הנכונה ולחיצה על המשך
			instruction.name = "instruction";
			instruction.textAlign = "right";
			instruction.text = "לחץ על התשובה ולאחר מכן על בדוק";
			instruction.x = 1100;
			instruction.y = 200;
			stage.addChild(instruction);
			instruction.font = '14px Assistant';
		
			stage.getChildByName("friendly" + rndListener1).gotoAndStop(0);
			stage.getChildByName("friendly" + rndListener2).gotoAndStop(0);
			if (gameArr.length > 1) //אם נשארו יותר משאלה אחת
			{
				tempPlayerNumber = parseInt(evt.currentTarget.name.slice(8));
			} else //אם נשארה שאלה אחת במערך נרצה שבמקרה והמשתמש טעה הכדור יגיע לשוער היריב
			{
				tempPlayerNumber = 4;
		
			}
		
			if (tempPlayerNumber == rndListener1) {
				stage.getChildByName("friendly" + rndListener2).alpha = 0.4;
			}
			if (tempPlayerNumber == rndListener2) {
				stage.getChildByName("friendly" + rndListener1).alpha = 0.4;
			}
		
			if (tempPlayerNumber == rndListener2 && rndListener2 == rndListener1) {
				stage.getChildByName("friendly" + rndListener1).alpha = 1;
			}
			console.log(tempPlayerNumber + " זה המספר של השחקן שלחצתי עליו");
		
			stage.removeChild(stage.getChildByName("forpass"));
		
			if (gameArr.length == 1) {
				stage.removeChild(stage.getChildByName("Lastshot"));
			}
		
		
			for (i = 0; i < 5; i++) {
				stage.getChildByName("friendly" + i).removeEventListener("click", question);
			}
		
			qnum = Math.floor(Math.random() * gameArr.length);
			console.log(qnum + " qnumim " + lastqnum);
			if (gameArr.length != 1) {
				console.log(qnum + " qnumim " + lastqnum);
				while (qnum == lastqnum) // אם נותרה יותר משאלה אחת נדאג שלא יקרה מצב ששאלה שלא נענתה נכון תוגרל שוב מיד
				{
					qnum = Math.floor(Math.random() * gameArr.length);
				}
			}
		
		
			lastqnum = qnum;
			numberOfAnswer = gameArr[qnum].length - 1;
			tempQuestion = [];
			for (i = 1; i <= numberOfAnswer; i++) {
				tempQuestion.push(i);
			}
		
			tempQuestion.sort(function (a, b) {
				return 0.5 - Math.random()
			}); //ערבול מערך המסיחים
		
			console.log(gameArr[qnum][0][0]);
			console.log(tempQuestion);
			//var tempQuestion=gameArr[qnum];
		
			var clock = new lib.clock();
			clock.x = 750;
			clock.y = 102;
			stage.addChild(clock);
			clock.name = "clock";
			if (gameArr[qnum][0][2] == "noLimit") {
				clock.clocktxt.text = "--";
				timer = 0;
			} else {
				clock.clocktxt.text = gameArr[qnum][0][2];
				timer = setInterval(function () {
					//הקטנת התוכן של תיבת הטקסט באחד
					clock.clocktxt.text = parseInt(clock.clocktxt.text) - 1;
					TT++;
					if (parseInt(clock.clocktxt.text) == 0) {
						stage.removeChild(stage.getChildByName("checkBtn"));
						clearInterval(timer);
						console.log("times up");
						endOfTime();
					}
				}, 1000);
			}
		
		
		
		
			var qtxt = new createjs.Text();
			qtxt.name = "qtxt";
			qtxt.textAlign = "right";
			qtxt.text = gameArr[qnum][0][0];
			console.log(gameArr[qnum][0][0]);
			if (qtxt.text.length < 44) {
		
				qtxt.font = '18pt Assistant';
				if (qtxt.text.length > 34) {
					instruction.y = 200;
				}
		
			} else {
				qtxt.font = '17px Assistant';
				instruction.y = 220;
			}
		
			qtxt.width = 200;
			qtxt.x = 1100;
			qtxt.y = 150;
			stage.addChild(qtxt);
		
			if (gameArr[qnum][0][1] == "text") {
				qtxt.lineWidth = 400;
				qtxt.lineHeight = 20;
			} else {
				qtxt.lineWidth = 300;
				qtxt.lineHeight = 20;
				var img = new Image();
				//console.log("/uploadedFiles/"+gameArr[qnum][anum][0].toString());
				img.src = "/uploadedFiles/" + gameArr[qnum][0][1].toString();
				console.log(img.src.toString());
				var qpic = new createjs.Bitmap(img).set({
					scaleX: 0.27,
					scaleY: 0.27
				});
				qpic.name = "qpic";
				qpic.x = qtxt.x - qtxt.lineWidth - 40;
				qpic.y = 120;
				stage.addChild(qpic);
		
		
				console.log(gameArr[qnum][0][0])
				if (qtxt.text.length < 44) {
		
					qtxt.font = '18pt Assistant';
					if (qtxt.text.length > 34) {
						instruction.y = 200;
					}
		
				} else {
					qtxt.font = '17px Assistant';
					instruction.y = 220;
				}
		
		
		
		
				var qzoomIcon = new lib.zoomBtn();
				qzoomIcon.name = "qzoomIcon";
				qzoomIcon.x = qpic.x - 35;
				qzoomIcon.y = qpic.y + 40;
				stage.addChild(qzoomIcon);
				qzoomIcon.addEventListener("click", zoomFunc);
			}
		
		
			instructionY = instruction.y;
			numberOfAnswer = gameArr[qnum].length - 1;
		
			for (i = 1; i <= numberOfAnswer; i++) {
				radioBtns();
				console.log(gameArr[qnum][anum][2]);
				if (gameArr[qnum][anum][2].toString() == "text") {
					ansTxt();
				} else {
					ansPic();
				}
		
			}
		}
		
		function endOfTime() { //תום הזמן למתן תשובה
			gameArr[qnum][0][3]++;
			for (i = 1; i <= tempQuestion.length; i++) {
				stage.removeChild(stage.getChildByName("radio" + i));
				stage.removeChild(stage.getChildByName("qzoomIcon" + i));
				stage.removeChild(stage.getChildByName("anstxt"));
				stage.removeChild(stage.getChildByName("anspic" + i));
			}
			stage.removeChild(stage.getChildByName("anstxt"));
			stage.removeChild(stage.getChildByName("black"));
			stage.removeChild(stage.getChildByName("qtxt"));
			stage.removeChild(stage.getChildByName("instruction"));
			stage.removeChild(stage.getChildByName("qzoomIcon"));
			stage.removeChild(stage.getChildByName("qpic"));
		
		
			createjs.Sound.play("refBlow");
			var timesUp = new createjs.Text();
			timesUp.text = "תם הזמן, לחץ על כפתור המשך ונסה שוב"
			timesUp.name = "timesUp";
			timesUp.lineWidth = 200;
			timesUp.lineHeight = 30;
			timesUp.textAlign = "center";
			timesUp.width = 30;
			timesUp.x = 920;
			timesUp.y = 270;
			stage.addChild(timesUp);
			timesUp.font = '22px Assistant';
		
			var nextB = new lib.nextBtn();
			stage.addChild(nextB);
			nextB.name = "nextBtn";
			nextB.x = 700;
			nextB.y = 590;
			nextB.addEventListener('click', panel);
		
		}
		
		
		function radioBtns() {
			anum = tempQuestion[i - 1];
			var radio = new lib.radioBtn;
			radio.name = "radio" + i;
			radio.gotoAndPlay(0);
			console.log(radio.name + " " + gameArr[qnum][anum][2].toString());
			stage.addChild(radio);
			if (gameArr[qnum][anum][2] == "text") {
				radio.y = instructionY + 60 * i;
				radio.x = 1080;
			} else {
				if (i == 1 || i == 2) {
					radio.y = instructionY + 90;
					if (i == 1) {
						radio.x = 1080;
					} else {
						radio.x = 860;
					}
				} else {
					radio.y = instructionY + 250;
					if (i == 3) {
						radio.x = 1080;
					} else {
						radio.x = 860;
					}
				}
		
		
			}
		
			radio.addEventListener("click", selectAns);
			console.log("bla bla  " + gameArr[qnum][anum][1]);
			if (gameArr[qnum][anum][1].toString() == "true") {
				console.log("צודק טועה " + gameArr[qnum][anum][1]);
				target = radio.name;
			}
		
		}
		
		
		function selectAns(evt) {
			for (i = 1; i <= numberOfAnswer; i++) {
				stage.getChildByName("radio" + i).gotoAndStop(0);
			}
			evt.currentTarget.gotoAndStop(2);
			answerPressedX = evt.currentTarget.x;
			answerPressedY = evt.currentTarget.y;
			console.log("רדיו " + evt.currentTarget.name + " " + target);
			if (evt.currentTarget.name == target) {
				console.log("צדקת");
				rightOrWrong = true;
				console.log(tempPlayerNumber);
				tempPlayerX = stage.getChildByName("friendly" + tempPlayerNumber).x;
				tempPlayerY = stage.getChildByName("friendly" + tempPlayerNumber).y;
			} else {
				console.log("טעית");
				rightOrWrong = false;
				tempPlayerX = stage.getChildByName("rival" + tempPlayerNumber).x; //אם המתשמש טעה הכדור יימסר לשחקן יריב
				tempPlayerY = stage.getChildByName("rival" + tempPlayerNumber).y; //אם המתשמש טעה הכדור יימסר לשחקן יריב
			}
		
			var checkB = new lib.checkBtn(); //הוספת כפתור בדוק תשובה
			checkB.name = "checkBtn";
			checkB.x = 700;
			checkB.y = 590;
			stage.addChild(checkB);
			checkB.addEventListener('click', checkAns);
		
		}
		
		function ansTxt() {
			//מסיחי טקסט
			var anstxt = new createjs.Text();
			anstxt.name = "anstxt";
			anstxt.textAlign = "right";
			anstxt.text = gameArr[qnum][anum][0];
			console.log("מסיח " + gameArr[qnum][anum][0]);
			anstxt.lineWidth = 400;
			stage.addChild(anstxt);
			anstxt.font = '16pt Assistant';
			anstxt.y = stage.getChildByName("radio" + i).y - 4;
			anstxt.x = 1071;
			console.log(tempQuestion[0][anum]);
		}
		
		function ansPic() {
			//מסיחי תמונה
			//var anspic = new(questions[qnum][anum][0]);
			var img = new Image();
			//console.log("/uploadedFiles/"+gameArr[qnum][anum][0].toString());
			img.src = "/uploadedFiles/" + gameArr[qnum][anum][0].toString();
			console.log(img.src.toString());
			var anspic = new createjs.Bitmap(img).set({
				scaleX: 0.4,
				scaleY: 0.4
			});
		
			console.log(anspic);
		
			anspic.name = "anspic" + anum;
			console.log(anspic.name);
			anspic.y = stage.getChildByName("radio" + i).y - 50;
			anspic.x = stage.getChildByName("radio" + i).x - 130;
			stage.addChild(anspic);
		
			//הוספת אייקון זום
			var qzoomIcon = new lib.zoomBtn();
			qzoomIcon.name = "qzoomIcon" + anum;
			qzoomIcon.x = anspic.x - 20;
			qzoomIcon.y = anspic.y + 110;
			stage.addChild(qzoomIcon);
			qzoomIcon.addEventListener("click", zoomFunc);
		}
		
		function zoomFunc(evt) {
			for (i = 1; i <= numberOfAnswer; i++) {
		
				stage.getChildByName("radio" + i).removeEventListener("click", selectAns);
			}
		
			var black = new lib.blackScreen();
			black.name = "black";
			stage.addChild(black);
			if (evt.currentTarget.name == "qzoomIcon") //אם הזום הוא על תמונת שאלה
			{
				var img = new Image();
				//console.log("/uploadedFiles/"+gameArr[qnum][anum][0].toString());
				img.src = "/uploadedFiles/" + gameArr[qnum][0][1].toString();
				console.log(img.src.toString());
				var bigPic = new createjs.Bitmap(img).set({
					scaleX: 1.3,
					scaleY: 1.3
				});
			} else //אם הזום הוא על תמונת תשובה
			{
				for (i = 1; i <= tempQuestion.length; i++) {
					stage.getChildByName("qzoomIcon" + i).removeEventListener("click", zoomFunc);
				}
				zoomNum = parseInt(evt.currentTarget.name.slice(9));
				console.log("זה מספר התמונה להגדלה" + zoomNum);
				var img = new Image();
				img.src = "/uploadedFiles/" + gameArr[qnum][zoomNum][0].toString();
				var bigPic = new createjs.Bitmap(img).set({
					scaleX: 1.3,
					scaleY: 1.3
				});
			}
		
		
			bigPic.x = 525;
			bigPic.y = 200;
		
			black.addChild(bigPic);
		
			var xZoom = new lib.Xzoom;
			xZoom.x = bigPic.x;
			xZoom.y = (bigPic.y) - 45;
			xZoom.addEventListener('click', exitZoom);
			black.addChild(xZoom);
		
		
		}
		
		function exitZoom() {
			for (i = 1; i <= tempQuestion.length; i++) {
				stage.getChildByName("radio" + i).addEventListener("click", selectAns);
				if (stage.getChildByName("qzoomIcon" + i)) {
					stage.getChildByName("qzoomIcon" + i).addEventListener("click", zoomFunc);
				}
		
			}
			stage.removeChild(stage.getChildByName("black"));
		}
		
		
		function checkAns() //בודקת האם צדק בתשובתו או לא
		{
			if (timer != 0) {
				clearInterval(timer);
			}
		
			stage.removeChild(stage.getChildByName("qzoomIcon"));
			for (var i = 1; i <= numberOfAnswer; i++) {
		
				stage.getChildByName("radio" + i).removeEventListener("click", selectAns);
				stage.removeChild(stage.getChildByName("qzoomIcon" + i));
			}
			if (gameArr.length == 1 && rightOrWrong == true) {
				score += (100 / numberOfQustion) / gameArr[qnum][0][3]; //מתן ניקוד על השאלה האחרונה
				console.log(score);
				stage.removeAllChildren();
				endingAn();
				console.log("הפעל אנימציית סיום");
			} else {
				directionX = (tempPlayerX - stage.getChildByName("ball").x) / 160;
				directionY = (tempPlayerY - stage.getChildByName("ball").y) / 160;
				if (gameArr.length == 3) {
					player4PositionX = (460 - stage.getChildByName("friendly4").x) / 160;
					player4PositionY = (165 - stage.getChildByName("friendly4").y) / 160;
		
				}
				stage.getChildByName("ball").gotoAndPlay(1);
				for (i = 0; i < 5; i++) {
					var frameNum1 = Math.floor(Math.random() * (44 - 31)) + 31;
					var frameNum2 = Math.floor(Math.random() * (25 - 2)) + 2;
		
					stage.getChildByName("friendly" + i).gotoAndPlay(frameNum1);
					stage.getChildByName("rival" + i).gotoAndPlay(frameNum2);
				}
				myInterval = setInterval(move, 1);
		
				stage.removeChild(stage.getChildByName("checkBtn"));
				stage.removeChild(stage.getChildByName("instruction"));
		
			}
		}
		
		function move() {
			var ballName = stage.getChildByName("ball");
		
			ballName.x += directionX; // התזוזה עצמה
			ballName.y += directionY; // התזוזה עצמה
			if (gameArr.length == 3) {
				stage.getChildByName("friendly4").x += player4PositionX;
				stage.getChildByName("friendly4").y += player4PositionY;
			}
		
		
		
			if (intersect(stage.getChildByName("ball"), stage.getChildByName("friendly" + tempPlayerNumber)) && rightOrWrong == true) {
				//אם יש מגע בין הכדור לשחקן הקבוצה והמשתמש צדק בתשובה
		
		
				stage.getChildByName("ball").gotoAndPlay(0);
				for (i = 0; i < 5; i++) {
					stage.getChildByName("friendly" + i).gotoAndStop(0);
					stage.getChildByName("rival" + i).gotoAndStop(0);
				}
		
				stage.getChildByName("friendly4").x = 460;
				stage.getChildByName("friendly4").y = 165;
				directionX = 0;
				directionY = 0;
				ballName.x = tempPlayerX;
				ballName.y = tempPlayerY - 13;
				artificialFeedback();
		
			}
		
			if (intersect(stage.getChildByName("ball"), stage.getChildByName("rival" + tempPlayerNumber)) && rightOrWrong == false) {
				//אם יש מגע בין הכדור לשחקן היריבה והמשתמש טעה בתשובה
				stage.getChildByName("ball").gotoAndPlay(0);
				for (i = 0; i < 5; i++) {
					stage.getChildByName("friendly" + i).gotoAndStop(0);
					stage.getChildByName("rival" + i).gotoAndStop(0);
				}
				directionX = 0;
				directionY = 0;
				ballName.x = tempPlayerX;
				ballName.y = tempPlayerY + 13;
				artificialFeedback();
			}
		}
		function intersect(obj1, obj2) {
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
			if (obj1.x + ((obj1W.width / 2) - 11) <= obj2.x - ((obj2W.width / 2) - 11)) {
				return false;
			} else if (obj1.y + ((obj1W.height / 2) - 11) <= obj2.y - ((obj2W.height / 2) - 11)) {
				return false;
			} else if (obj1.x - ((obj1W.width / 2) - 11) > obj2.x + ((obj2W.width / 2) - 11)) {
				return false;
			} else if (obj1.y - ((obj1W.height / 2) - 11) > obj2.y + ((obj2W.height / 2) - 11)) {
				return false;
			}
			return true;
		}
		
		function artificialFeedback() {
			clearInterval(myInterval);
			if (rightOrWrong == true) {
		
				beforePlayerNumber = tempPlayerNumber;
				score = score + ((100 / numberOfQustion) / gameArr[qnum][0][3]) // ניקוד לשאלה ייקבע על ידי (100 חלקי מספר השאלות) חלקי מספר ניסיונות המענה
				console.log(score);
				console.log("sdfsd");
				gameArr.splice(qnum, 1);
				console.log(gameArr);
				var greenV = new lib.rightMC();
				stage.addChild(greenV);
				greenV.name = "greenV";
				greenV.x = answerPressedX + 40;
				greenV.y = answerPressedY - 10;
				qcounter++;
			} else { //אם המתשמש טעה בתשובה שלו
				console.log("nope");
				console.log(gameArr);
		
				gameArr[qnum][0][3]++ //העלאת קאונטר ניסיונות התשובה ב1
		
		
				console.log("טעות" + gameArr[qnum][0][2]);
				var redX = new lib.wrongMC();
				stage.addChild(redX);
				redX.name = "redX";
				redX.x = answerPressedX + 40;
				redX.y = answerPressedY - 10;
			}
			stage.removeChild(stage.getChildByName("checkBtn"));
			var nextB = new lib.nextBtn();
			stage.addChild(nextB);
			nextB.name = "nextBtn";
			nextB.x = 700;
			nextB.y = 590;
			nextB.addEventListener('click', panel);
		}
		
		function endingAn() //הפעלה של אנימציית סיום
		{
			createjs.Sound.stop("crowdSound");
			createjs.Sound.volume = 0.5;
			createjs.Sound.play("crowdSound");
			var endscene = new lib.endingMC();
			stage.addChild(endscene);
			console.log("ending");
			setTimeout(function () {
				stage.removeChild(endscene);
				lastScreen();
			}, 10000);
		}
		
		function lastScreen() {
			console.log("last");
			createjs.Sound.stop();
		
			var end = new lib.endfeed;
			stage.addChild(end);
		
			var gameNameTxt = new createjs.Text(); //תיבת זמן דינאמית להדפסת שם המשחק
			gameNameTxt.name = "gameNameTxt";
			gameNameTxt.textAlign = "center";
			gameNameTxt.text = mygametitle;
			gameNameTxt.x = 910;
			gameNameTxt.y = 470;
			stage.addChild(gameNameTxt);
			gameNameTxt.font = 'bold 20px Assistant';
		
			//סיכום זמן
			console.log(TT);
			var minutes = Math.floor(TT / 60);
			var seconds = TT % 60;
			var totalTime = new createjs.Text(); //תיבת זמן דינאמית להדפסת הזמן
			totalTime.name = "totalTime";
			totalTime.textAlign = "center";
			if (seconds > 9) {
				totalTime.text = "זמן כולל: " + minutes.toString() + ":" + seconds.toString();
			} else {
				totalTime.text = "זמן כולל: " + minutes.toString() + ":0" + seconds.toString();
			}
			totalTime.x = 805;
			totalTime.y = 530;
			stage.addChild(totalTime);
			totalTime.font = 'bold 18px Assistant';
		
			//סיכום ציון
			var totalScore = new createjs.Text(); //תיבת זמן דינאמית להדפסת הציון
			totalScore.name = "totalScore";
			totalScore.textAlign = "center";
			totalScore.text = "ציון: " + Math.round(score);
			totalScore.x = 1012;
			totalScore.y = 530;
			stage.addChild(totalScore);
			totalScore.font = 'bold 18px Assistant';
		
			//יצירת כפתורי משחק חדש
			var finish = new lib.finishBtn;
			stage.addChild(finish);
			finish.x = 960;
			finish.y = 570;
			finish.addEventListener("click", chooseScreen);
		
			var restart = new lib.restartBtn;
			stage.addChild(restart);
			restart.x = 753;
			restart.y = 570;
			restart.addEventListener("click", forRestart);
		}
		function forRestart() {
			isRestart = true;
			gameArr = [];
			initProgram();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1440,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_.png?1563538811970", id:"game_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1563538824243", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1563538824243", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1563538824243", id:"an.TextInput"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;