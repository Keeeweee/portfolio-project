var population;
var trueWidth = window.innerWidth;
var trueHheight = window.innerHeight - 56; //Nav Bar height
var lifespan = 200;
var count = 0;
var target;

var magnitude = 0.8;


function setup() {
    createCanvas(
        trueWidth,
        trueHheight
    );

    population = new Population();

    target = createVector(width/2, 50);
}

function draw() {
    background(0);
    population.run();
    count++;

    if (count >= lifespan)
    {
        population.evaluate();
        population.selection();
        count = 0;
    }

    ellipse(target.x, target.y, 16, 16);

}

function Population() {
    this.rockets = [];
    this.matingPool = [];

    this.populationSize = 100;

    for (let i = 0; i < this.populationSize; i++) {
        this.rockets[i] = new Rocket();
    }

    this.evaluate= function() {
        this.rockets.forEach(rocket => rocket.calculateFitness());
        let maximum = max(this.rockets.map(rocket => rocket.getFitness()));
        this.rockets.forEach(rocket => {
            rocket.fitness = norm(rocket.fitness, 0, maximum);
        });

        this.matingPool = [];

        this.rockets.forEach( rocket => {
            let n = rocket.getFitness() * 10;
            for (let i = 0; i < n; i++) {
                this.matingPool.push(rocket);
            }
        });
    };


    this.selection = function() {
        this.rockets = this.rockets.map(() => {
            let fatherDna = random(this.matingPool).dna;
            let motherDna = random(this.matingPool).dna;

            let childDna = fatherDna.crossover(motherDna);

            childDna.mutation();

            return new Rocket(childDna);
        });
    };

    this.run = function() {
        this.rockets.forEach(rocket => rocket.update());
        this.rockets.forEach(rocket => rocket.show());
    };
}

function Dna(genes) {
    if (genes) {
        this.genes = genes;
    }
    else {
        this.genes = [];
        for (let i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D().setMag(magnitude);
        }
    }

    this.crossover = function(partnerDna) {
        let newDna = [];

        let mid = random(this.genes.length);

        for (let i = 0; i < this.genes.length; i++)
        {
            if (i < mid) {
                newDna.push(this.genes[i])
            }
            else {
                newDna.push(partnerDna.genes[i])
            }
            // let chance = random();
            // if (chance >= 0.5) {
            //     newDna.push(this.genes[i]);
            // }
            // else {
            //     newDna.push(partnerDna.genes[i])
            // }
        }

        return new Dna(newDna);
    };

    this.mutation = function() {
        this.genes = this.genes.map(gene => {
            if (random() < 0.001) {
                return p5.Vector.random2D().setMag(magnitude);
            }
            return gene;
        });
    }
}

function Rocket(dna) {
    this.position = createVector(width/2,
                                 height);
    this.velocity = createVector();
    this.acceleration = createVector();

    this.completed = false;

    if (dna) {
        this.dna = dna;
    }
    else {
        this.dna = new Dna();
    }

    this.fitness = 0;

    this.applyForce = function(force) {
        this.acceleration.add(force);
    };

    this.update = function() {
        if (dist(this.position.x, this.position.y, target.x, target.y) < 10) {
            this.completed = true;
            this.position = target.copy();
        }

        if (!this.completed)
        {
            this.applyForce(this.dna.genes[count]);

            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);

            this.acceleration.mult(0);
        }

    };

    this.show = function() {
        push();
        noStroke();
        fill(255,150);
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    };

    this.getFitness = function()
    {
        return this.fitness;
    };

    this.calculateFitness = function() {
        let distance = dist(this.position.x, this.position.y, target.x, target.y);
        let maxFitness = 100;

        this.fitness = distance === 0 || 1/distance > maxFitness ? maxFitness : 1/distance;
    };
}