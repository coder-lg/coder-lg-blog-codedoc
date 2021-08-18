<!-- > :Hero src=src/assets/images/batch-file.png -->

> :Title
>
> Gitpod. And the automation.

> :Author name=LG,
>         date=2021-08-20,
>         avatar=src/assets/images/me.jpg

Back after a LONG time! We hit 100+ commits now! And this is a special blog: The Gitpod Dockerfile.

Now, I **love** Visual Studio Code. Lots of extensions, built-in terminal emulator, and minimalistic. But the thing I **HATE** is that on my PC, it takes **10** minutes to load up. 10 MINUTES!? I would finish a basic Python file in 10 minutes. And I wanted access to my other PC too. So, I heard about code-server, which does that in a WHOLE NEW LEVEL. I can now code from my phone, or any device. But, it needed a Linux computer and my WSL loads the computer up and makes it slow. So, what did I do?

The same thing others do.

Find a simple, and easier solution.

Look, I don't hate code-server, it is that, it needs a latency below 75ms which is NOT on my WSL. So, I ended up with Gitpod, which I am using right now to do this blog.

Look, it is DAMN cool. It has a LINUX terminal running Focal Fossa. It is much faster, except, you need network. And, it supports Docker, PostgreSQL and more too!

And it has OPTIONS! GitHub login, connect your GitLab and BitBucket, choose between VS Code and Theia, and the most SAVAGELY coolest thing, Share.

I could COLLABORATE now!

But, I ended up with a problem. Every tie I write a blog here or somewhere else, I have to get CODEDOC or install Bundle, and serve the site. BIG headache.

But, then, I discovered this:

The Gitpod Dockerfile.

I feel like a god now.

## How I set the Dockerfile up

First off, I needed an image. Frankly, Gitpod made a LOT of images on Docker Hub, but all I want is the fully-loaded workspace image. So, I will paste the entire layout of my repository on Gitpod here. Wait...

![layout of the files from Gitpod](src/assets/images/layout.PNG)

As you saw, there are two underlined files. The `.gitpod.yml` and the `gitpod.Dockerfile`. THese are the MOST important files here.
<!--First revsion-->