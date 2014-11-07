// Get the canvas DOM element along with it's 2D context
// which is basically what we do our work on

debug = true;

var canvas = document.getElementById('particle-canvas'),
        ctx = canvas.getContext('2d'),
        window_width = canvas.width,//window.innerWidth,
        window_height = canvas.height;//window.innerHeight;
        if(debug) console.log('window_width set to ' + window_width);
        if(debug) console.log('window_height set to ' + window_height);

// Set canvas's width and height to that
// of window (the view port)
//canvas.width = window_width;
//canvas.height = window_height;

// Just a random object name to store some utility
// functions that we can use later
var $$ = {
    // Get a random integer from a range of ints
    // Usage: $$.randomInt(4, 8) -> would return
    // 4 or 5 or 6 or 7 or 8
    randomInt: function(min, max) {
        return Math.floor( Math.random() * (max - min + 1) + min );
    }
};

// Pool of particles. Basically an array that stores all
// our particles
var particles = [];

//Protons
var protons = [];

//Enum to define the side the proton starts out on
var Side = {
    LEFT: "left",
    RIGHT: "right"
};

//Enum for the quark colors
var QuarkColor = {
    RED: "#CE0000",
    GREEN: "#39B54A",
    BLUE: "#3FA9F5"
}

function MoveQuark() {
    var vibrate = false;
    var debug = false;

    if(debug) console.log('Move');

    if(debug) console.log('\t --> x : ' + this.x);
    if(debug) console.log('\t --> y : ' + this.y);

    //Introduce some quark vibrations
    //this.x = this.x + (this.x_speed * 2 + (vibrate ? $$.randomInt(-1, 1) : 0));
    //this.y = this.y + (this.y_speed * 2 + (vibrate ? $$.randomInt(-1, 1) : 0));

    this.x = this.x + (this.x_speed * 2);
    this.y = this.y + (this.y_speed * 2) + (vibrate ? 4 * Math.sin(this.x) : 0);

    if(debug) console.log('\t --> x\' : ' + this.x);
    if(debug) console.log('\t --> y\' : ' + this.y);
}

function MoveProton() {
    var debug = false;

    if(debug) console.log('Move');

    if(debug) console.log('\t --> x : ' + this.x);
    if(debug) console.log('\t --> y : ' + this.y);

    this.x = this.x + (this.x_speed * 2);
    this.y = this.y + (this.y_speed * 2);

    if(debug) console.log('\t --> x\' : ' + this.x);
    if(debug) console.log('\t --> y\' : ' + this.y);

    this.redQuark.Move();
    this.greenQuark.Move();
    this.blueQuark.Move();
}

// Draw the particle
function DrawQuark() {
    // Begin Drawing Path
    ctx.beginPath();
    // Background color for the object that we'll draw
    ctx.fillStyle = this.bg_color;
    // Draw the arc
    // ctx.arc(x, y, radius, start_angle, end_angle, anticlockwise)
    // angle are in radians
    // 360 degrees = 2π radians or 1 radian = 360/2π = 180/π degrees
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    // Close Drawing Path
    ctx.closePath();
    // Fill the canvas with the arc
    ctx.fill();
}

function DrawProton(radius) {

    //Draw quarks first
    this.redQuark.Draw();
    this.greenQuark.Draw();
    this.blueQuark.Draw();

    var grad = false;

    // Begin Drawing Path
    ctx.beginPath();

    var radius = this.radius;
    var x = this.x;
    var y = this.y;

    if(grad) {
        var gradient = ctx.createRadialGradient(x, y, (radius - 2), x, y, radius);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "#444444");

        // Set Proton background color to a radial gradient
        ctx.fillStyle = gradient;
    }
    else {
        //ctx.fillStyle = 'rgba(0x3F,0xA9,0x4A,0.0)';
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
    }

    // Draw the arc
    // ctx.arc(x, y, radius, start_angle, end_angle, anticlockwise)
    // angle are in radians
    // 360 degrees = 2π radians or 1 radian = 360/2π = 180/π degrees
    ctx.arc(x, y, radius, 0, Math.PI*2, false);

    // Close Drawing Path
    ctx.closePath();

    // Fill the canvas with the arc
    //ctx.fill();
}

//Instantiates a Quark
function Quark(radius, x, y, x_speed, color) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.bg_color = color;
    this.x_speed = x_speed;
    this.y_speed = 0;

    //Draw method
    this.Draw = DrawQuark;
    this.Move = MoveQuark;

    if(debug) {
        console.log('Quark instantiated with: ');
        console.log('\t radius : ' + this.radius);
        console.log('\t x : ' + this.x);
        console.log('\t y : ' + this.y);
        console.log('\t bg_color : ' + this.bg_color);
        console.log('\t x_speed : ' + this.x_speed);
        console.log('\t y_Speed : ' + this.y_speed);
    }
}

//Instantiates a Proton
function Proton(side) {
    if(debug) console.log('Proton: Instantiating new Proton with side : ' + side);
    this.radius = 40;
    this.side = side;

    this.Draw = DrawProton;
    this.Move = MoveProton;

    var i_radius = this.radius / 2;
    var q_radius = i_radius / 2;

    if(this.side == Side.LEFT) {
        this.x = this.radius;
        this.y = window_height / 2;

        this.x_speed = 1;
        this.y_speed = 0;

        //Red Quark X/Y
        var rqx = this.x - i_radius;
        var rqy = this.y;

        //Green Quark X/Y
        var gqx = this.x + (i_radius / 2);
        var gqy = this.y + ((Math.sqrt(3) / 2) * i_radius);

        //Blue Quark X/Y
        var bqx = gqx;
        var bqy = this.y - ((Math.sqrt(3) / 2) * i_radius);
    }

    if(this.side == Side.RIGHT) {
        this.x = window_width - this.radius;
        this.y = window_height / 2;

        this.x_speed = -1;
        this.y_speed = 0;

        //Green Quark X/Y
        var gqx = this.x + i_radius;
        var gqy = this.y;

        //Blue Quark X/Y
        var bqx = this.x - (i_radius / 2);
        var bqy = this.y + ((Math.sqrt(3) / 2) * i_radius);

        //Red Quark X/Y
        var rqx = bqx;
        var rqy = this.y - ((Math.sqrt(3) / 2) * i_radius);
    }

    if(debug) {
        console.log('Proton created with: ');
        console.log('\t radius : ' + this.radius);
        console.log('\t x : ' + this.x);
        console.log('\t y : ' + this.y);
        console.log('\t x_speed : ' + this.x_speed);
        console.log('\t y_speed : ' + this.y_speed);
        console.log('\t q_radius : ' + q_radius);
        console.log('\t i_radius : ' + i_radius);
        console.log('\t rqx : ' + rqx);
        console.log('\t rqy : ' + rqy);
        console.log('\t gqx : ' + gqx);
        console.log('\t gqy : ' + gqy);
        console.log('\t bqx : ' + bqx);
        console.log('\t bqy : ' + bqy);
    }

    //Create Quarks
    this.redQuark = new Quark(q_radius, rqx, rqy, this.x_speed, QuarkColor.RED);
    this.greenQuark = new Quark(q_radius, gqx, gqy, this.x_speed, QuarkColor.GREEN);
    this.blueQuark = new Quark(q_radius, bqx, bqy, this.x_speed, QuarkColor.BLUE);
}

function CreateProtons() {
    var lp = new Proton(Side.LEFT);
    var rp = new Proton(Side.RIGHT);

    if(debug) console.log('Created proton with side : ' + lp.side);
    if(debug) console.log('Created proton with side : ' + rp.side);

    protons.push(lp);
    protons.push(rp);

    if(debug) console.log('Added protons to array');
}

var Particle = {
    x: window_width/2,
    y: window_height/2,
    x_speed: 10,
    y_speed: 10,
    radius: 10,
    _position: {},

    // Draw the particle
    draw: function() {
        // Begin Drawing Path
        ctx.beginPath();
        // Background color for the object that we'll draw
        ctx.fillStyle = this.bg_color;
        // Draw the arc
        // ctx.arc(x, y, radius, start_angle, end_angle, anticlockwise)
        // angle are in radians
        // 360 degrees = 2π radians or 1 radian = 360/2π = 180/π degrees
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        // Close Drawing Path
        ctx.closePath();
        // Fill the canvas with the arc
        ctx.fill();
    },

    // These are just some helpers that
    // I've created, got no use in this
    // creation. These might give you some idea
    // to do some funky things .. Who knows ? :)
    trackPosition: function() {
        var position = {x: this.x, y: this.y};

        this._position.x = this.x;
        this._position.y = this.y;
    },
    getPosition: function() {
        return this._position;
    }
};

function CreateParticle() {
    // Create a particle object and use `Particle`
    // as the prototype of the object. I hope you know
    // about prototypes right ? Prototypal Inheritance, nope ? :S
    var particle = Object.create(Particle);

    // Random number between -5 and 5 using
    // our utility function, that was defined above.
    particle.x_speed = $$.randomInt(-3, 3);
    particle.y_speed = $$.randomInt(-3, 3);

    if(particle.x_speed == 0) {
        particle.x_speed = 1;
    }

    if(particle.y_speed == 0) {
        particle.y_speed = 1;
    }

    // Set the new particle's background color
    // HSLA FTW!
    // In the previous experiment, we were setting
    // the color inside the for loop below. Due to that
    // the particles used to change colors during emission.
    // This time, we'll set it beforehand, so that it doesnt
    // do that :)
    particle.bg_color = "hsla("+$$.randomInt(0, 360)+", 80%, 50%, 0.5)";

    // Push the newly created particle
    // into our master array
    particles.push(particle);

    //console.log('Particle created');
}

function RepaintProtons() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, window_width, window_height);

    if(debug) console.log('--> Repaint <--');

    //Redraw and move all protons and their quarks
    for (var i = 0; i < protons.length; i++) {
        var proton = protons[i];
        proton.Draw();
        proton.Move();

        //Remove proton from array when they reach the middle
        if(proton.x_speed > 0) {
            if(proton.x >= window_width / 2) {
                if(debug) console.log('--> COLLISION <--');
                protons.splice(i, 1);
                collided = true;
            }
        }

        if(proton.x_speed < 0) {
            if(proton.x <= window_width / 2) {
                if(debug) console.log('--> COLLISION <--');
                protons.splice(i, 1);
                collided = true;
            }
        }

        if(collided) {
            clearInterval(collisionTimer);
        }
    }
}

function RepaintParticles() {
    // Clear the entire Canvas
    // ctx.clearRect(0, 0, window_width, window_height);
    //
    // This is what leads to trails :)
    // You repaint the background with lesser opacity
    // which causes the particles from previous frame
    // to show up. It keeps on repeating unless the background
    // for the oldest particle becomes opaque and finally
    // that particle ceases to exist.
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, window_width, window_height);

    // Re-draw all particles we have in our bag!
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        particle.draw();

        // In the previous experiment, we restricted
        // particles count to 500. This time we'll do
        // something cooler! We'll simply get rid of
        // the particles that go out of our view port from the
        // master array.
        //
        // Settles at somewhere below 150 particles :)
        if (particle.x > window_width || particle.x < 0
             || particle.y > window_height || particle.y < 0) {
            particles.splice(i, 1);
        }

        // Changing x and y co-ordinates which
        // are random (generated in createParticle())
        //
        // This is cool, as we get different
        // speed for each particles then!
        //
        // Get rid of the *5 for yet another cool
        // trailing effect. Might also wanna adjust the speed
        // then by changing the $$.randomInt arguments above
        // in createParticle()
        particle.x = particle.x + (particle.x_speed*2);
        particle.y = particle.y + (particle.y_speed*2);

        // Track new position
        // Just a helper that might give you some
        // cool ideas to make some unique twists to this
        // experiment.
        particle.trackPosition();
    }
}

var time = 0;
masterTimer = setInterval(function() {

    timeout = false;

    if(collided) {
        if(debug) {
            if(time == 0) console.log('--> Starting master timer <--');
            console.log('masterTimer time : ' + time);
        }
        time = time + 1;
    }

    if(time > 2) {
        timeout = true;
        clearInterval(masterTimer);
        console.log('masterTimer --> TIMEOUT <--');
    }

}, 1000);

function ProtonCollision() {

    collided = false;

    if(debug) console.log('ProtonCollision: CreateProtons');
    CreateProtons();

    if(debug) console.log('ProtonCollision: setInterval: ' + 2000/60);
    collisionTimer = setInterval(RepaintProtons, 2000/60);
}

//Collide two protons
ProtonCollision();

//Produce the jets
jets = setInterval(function() {

    if(collided == true) {
        if(timeout == false) {
            CreateParticle();
        }

        if(particles.length > 0) {
            RepaintParticles();
        } else {
            console.log("All done...");
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, window_width, window_height);
            ctx.clearRect(0, 0, window_width, window_height);
            collided = false;
            timeout = false;
            clearInterval(jets);
        }
    }

}, 2000/60);    //Was set to 1000: Increasing causes slower particle generation, decreasing causes faster generation
