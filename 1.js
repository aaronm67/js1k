Z=Function;I=Z("H","M=document.createElement(H);b.insertBefore(M,c)");q=Z("i=[];for(h=j;h--;)i[h]=[]");r=Z("for(H=0;H<j;H++)for(e=k;e--;)a.fillStyle=g[H][e]?'red':'#eee',a.fillRect(e*f+1,H*f+1,f-1,f-1)");F=Z("q();for(H=0;H<j;H++)for(e=0;e<k;e++){n=g[H][e]?-1:0;for(h=-1;2>h;h++)for(o=-1;2>o;o++)g[(j+(H+h))%j][(k+(e+o))%k]&&n++;g[H][e]?1<n&&4>n&&(i[H][e]=1):3==n&&(i[H][e]=1)}g=i;S[Q]=t+++'th Gen';r()");G=Z("clearInterval(u)");L=Z('u=setInterval("F()",O),p=0');O=99;N="onmouseup";l=innerWidth-O;d=innerHeight-O;f=~~(d/30);k=~~(l/f);j=~~(d/f);D=u=p=0;E=t=1;c.width=l;c.height=d;Q="textContent";I("p");S=M;I("a");M[Q]="Start/Stop";I("button");M[Q]="_";M[N]=Z("E=!E;E?L():G()");M[N]();I("a");M[Q]="Speed";I("input");M.type="range";M.max=999;M.value=O;M.onchange=Z("O=M.value;E&&(G()||L())");c.onmousedown=Z("D=1;G()");c.onmousemove=c[N]=Z("a","H=~~((a.pageY-c.offsetTop)/f);e=~~((a.pageX-c.offsetLeft)/f);/v/.test(a.type)?D?(p=1,D=0):1==p&&(g[H][e]=1):(p||(g[H][e]=!g[H][e]),D=p=0,E&&L());r()");q();g=i