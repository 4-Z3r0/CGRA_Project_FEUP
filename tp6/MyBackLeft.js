
class MyBackLeft extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		this.backSideAppearance = new CGFappearance(this.scene);
		this.backSideAppearance.setAmbient(0.6,0.6,0.6,1);
		this.backSideAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.backSideAppearance.setSpecular(1,1,1,1);	
		this.backSideAppearance.setShininess(100);
		//this.backSideDoorAppearance.loadTexture("/CGRA_Final_Project/images/ceiling.png");
		//this.ceilingAppearance.loadTexture("/images/ceiling.png");
		this.backSideAppearance.loadTexture("/images/flecktarn.jpg");
		
		this.initBuffers();
	};


	display()
	{
		this.scene.pushMatrix();
		this.backSideAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}


	initBuffers()
	{
		this.vertices = [
			2.9,-0.08,1.8,
			3.4,0.35,1.8,
			2.9,0.7,1.8,
			3.4,0.7,1.8,
			];

		this.indices = [
			0,1,2,
			3,2,1,
		];
		
		this.normals = [
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1,
		];


		this.texCoords = [
			this.maxS,this.minT,
			this.maxS,this.maxT,
			this.minS,this.minT,
			this.maxS,this.minT
		];

			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};