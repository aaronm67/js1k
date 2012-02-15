// CreateAndAppendElement(tagName);
I = function(H) { 
	// append an element and append it to the document
	M=document.createElement(H);
	b.insertBefore(M,c); 
};

// InitializeEmptyHash();
q = function(H) { 
	i=[];
	for(h=j;h--;)
		i[h]=[]; 
};

// Draw();
r = function(H) { 
	for(H=0;H<j;H++)
		for(e=k;e--;)
			a.fillStyle=g[H][e] ?'red':'#ddd',
			a.fillRect(e*f+1, H*f+1, f-1, f-1); 
};


// Stop();
G = function(H) { 
	clearInterval(u); 
}

// Start();
L = function(H) { 
	u = setInterval(F,O,p=0); 
}

// Initialize();
Z = function(H) { 
	// Trigger mouseup on Start/Stop -- this will set it's textContent to Go
	V.onmouseup(E=t=1);
	q();// Initialize empty grid into i;
	F(g=i); // set Grid = Empty Grid; Update();
}

// Update();
F = function(H) { 
	q(); // create "Next Generation" into i as an empty hash
	for(H=0; H<j; H++)
		for(e=0;e<k;e++){
			n=g[H][e]?-1:0; // don't count self() as a live neighbor
			
			// count live neighbors
			for(h=-1;2>h;h++)
				for(o=-1;2>o;o++)
					g[(j+H+h)%j][(k+e+o)%k] && n++;
			g[H][e] ? 1 < n && 4 > n && ( i[H][e] = 1 ) : // if 2 or 3 neighbors, stay the same
			3 == n && ( i[H][e] = 1 ) // if exactly 3 neighbors, spawn
		}
		
		g=i; // set Grid = Next Generation
		S.textContent='Generation ' + t++; // increment generation and update the display
		r(); 
}

O = 99; // speed
c.width = l =  innerWidth - O; // canvas width = window Width - 100
c.height = d = innerHeight - O - O; // canvas height = window Height - 200
f = ~~(d / 30); // box width (try to fit 30 boxes high)
k = ~~(l / f); // # of boxes high
j = ~~(d / f); // # of boxes wide
D = u = p = 0; // IsDragging = Interval = 

// Append a header
I('h1');
M.textContent = 'Conways Game of Life';

// Generation counter
I('p');
S = M;

// Start/Stop button
I('button');
V=M; // save in a variable -- V.onmouseup() == start();
M.onmouseup= function(H) { 
	E=!E;
	// On click, if running, stop, if not running start
	V.textContent = E ? L() || 'End': G() ||'Go' 
};

// Clear button
I('button');
M.textContent = 'Clear';
M.onmouseup= Z;// on click, re-initialize to empty grid

// "Speed" label"
I('a');
M.textContent = 'Speed';

// "Speed" slider
I('input');
M.type = 'range';
M.max = O*5;
M.value = O;
M.onchange = function(H) { 	
	O=M.value;// SetSpeed = value, 
	E && ( G()||L() ); // Reset the Interval
};

// On CanvasMousedown, set "HasMouseDowned = 1", and Stop();
c.onmousedown = function(H) { 
	G(D=1); 
};

// Initialize empty grid();
Z();

// Draw a starting shape near-ish to the middle (note this is fairly random position across browsers)
H = j>>1-j;
h = k>>1;
g[3+H][h-1]=g[3+H][1+h]=g[4+H][h-2]=g[4+H][2+h]=g[4+H][h]=g[5+H][h-3]=g[5+H][3+h]=g[6+H][h-2]=g[6+H][2+h]=g[7+H][h-1]=g[7+H][1+h]=g[8+H][h]=1;

c.onmousemove = c.onmouseup = function(H) {
	// Box X/Y of action
	h=~~((H.pageY-c.offsetTop)/f);
	e=~~((H.pageX-c.offsetLeft)/f);
	
	/v/.test(H.type)? // if MouseMove
		D ? ( p = 1,D = 0 )  // if (hasMouseDowned) { Set "IsDragging", unset "HasMousedowned" }
		  :  1 == p && ( g[h][e] = 1 ) // else if (IsDragging) { grid[x][y] = LIVE }
	: // if (MouseUp) {
		( p ||  // if (!IsDragging)
			(g[h][e] = !g[h][e]), //  Toggle current square 
		D = p = 0, // HasMouseDowned = 0; IsDragging = 0;
		E && L() // if (IsRunning) { start(); }
	);
	
	// draw();
	r();
}

// draw();
r();
