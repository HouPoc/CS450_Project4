#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
uniform	bool	uParttern_VEX;
out vec2  	vST;		// texture coords
out	vec4	vColor;		// object color

const float PI = 	3.14159265;
const float AMP = 	0.2;		// amplitude
const float W = 	2.;		// frequency

void
main( )
{ 
	vST = gl_MultiTexCoord0.st;
	vec3 vert = gl_Vertex.xyz;
	vColor =gl_Color;
	if (uParttern_VEX) {
		vert.x = vert.x + 1. * cos( uTime * PI * 2.);
		vert.z = vert.z + 1. * sin( uTime * PI * 2.);
	}
	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}
