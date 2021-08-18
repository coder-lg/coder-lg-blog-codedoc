<!-- > :Hero src=src/assets/images/batch-file.png -->

> :Title
>
> Gitpod. And the automation.

> :Author name=LG,
>         date=2021-08-20,
>         avatar=src/assets/images/me.jpg

Back after a LONG time! We hit 100+ commits now! And this is a special blog.

Now, I **love** Visual Studio Code. Lots of extensions, built-in terminal emulator, and minimalistic. But the thing I **HATE** is that on my PC, it takes **10** minutes to load up. 10 MINUTES!? I would finish a basic Python file in 10 minutes. And I wanted access to my other PC too. So, I heard about code-server, which does that in a WHOLE NEW LEVEL. I can now code from my phone, or any device. But, it needed a Linux computer and my WSL loads the computer up and makes it slow. So, what did I do?

The same thing others do.

Find a simple, and easier solution.

Look, I don't hate code-server, it is that, for the `--link` flag which allows me to acces it from any device with a link, it wants below 75ms which is NOT on my WSL. So, I ended up with Gitpod, which I am using right now to do this blog.

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

As you saw, there are two underlined files. The `.gitpod.yml` and the `gitpod.Dockerfile`. These are the MOST important files here.
<!--First revsion-->

Now, the `.gitpod.yml` is a config file. The Dockerfile is the file choosing the image.

And there is only ONE image I like.

This one:

```dockerfile | .gitpod.Dockerfile
FROM gitpod/workspace-full
```

The FULLY LOADED workspace.

It gives you EVERYTHING you need. And that is just the Dockerfile. The entire Dockerfile is this:

```dockerfile | .gitpod.Dockerfile
FROM gitpod/workspace-full

# Install custom tools, runtime, etc.

# RUN bash .gitpod/gitpodDockerfile.sh

# RUN sudo apt-get install curl software-properties-common 
# RUN curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
# RUN sudo apt-get install nodejs 
RUN node --version

RUN npm i -g @codedoc/cli
RUN echo "Codedoc Installed, now activating Gitpod..."
# fails really
# RUN codedoc install
# RUN echo "installed, activating served site"
# RUN codedoc s
# # testing code-server --link
# RUN curl -fsSL https://code-server.dev/install.sh | sh
# RUN code-server --link

```

Ignore the comments, please.

But, that is just the image. How can I serve it while relaxing in my sofa and not typing?

Well, that's where the Gitpod config comes in. The entire code:

```yaml | .gitpod.yml
image:
  file: .gitpod.Dockerfile

# tasks for gitpod

tasks:
    # NodeJS work(commented out, use at your own risk)
  # - init: |
  #     sudo apt-get install curl software-properties-common 
  #     curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
  #     sudo apt-get install nodejs 
  #     echo "NodeJS 16 installed, check the version"
  #   command: node --version && npm --version 
    
    # Codedoc stuff
  - init: |
      codedoc install
      echo "Dependencies installed, serving..."
    command: codedoc serve

# GitHub
github:
  prebuilds:
    # enable for the master/default branch (defaults to true)
    master: true
    # enable for all branches in this repo (defaults to false)
    branches: true
    # enable for pull requests coming from this repo (defaults to true)
    pullRequests: true
    # enable for pull requests coming from forks (defaults to false)
    pullRequestsFromForks: true
    # add a "Review in Gitpod" button as a comment to pull requests (defaults to true)
    addComment: true
    # add a "Review in Gitpod" button to pull requests (defaults to false)
    addBadge: true
    # add a label once the prebuild is ready to pull requests (defaults to false)
    addLabel: prebuilt-in-gitpod
```

Coolio!

Now, if you see the readme, you will find an `Open in Gitpod` button. It takes you to a workspace like this! A video demonstrating this:

<!--video-->

Now, it built the entire image and loaded it up. Then, all the commands start overflowing. And my site is FINALLY served. Happens quickly too!

<!--Revision 2-->

# The usual end part:

> :SeeTypo$

# Tags

The [tags feature of Coding Blog Plugin](https://connect-platform.github.io/coding-blog-plugin/tags) is still being developed.  Eventually the tags will link somewhere.

[Gitpod](:Tag) [Dockerfiles](:Tag)

> :Watermark

> :Buttons
> > :Button label=GitHub, url=https://github.com/im-coder-lg
>
<!-- > > :Button icon=true, label=code, url=https://gist.github.com/coder-lg/f82b7337ac76ed6d70c2bd8e8dd7600d -->

Made and deployed by [`coding.blog`](https://coding.blog/) and CODEDOC
# Comments

> :DarkLight
> > :InLight
> >
> > > :Utterances theme=github-light
>
> > :InDark
> >
> > > :Utterances theme=github-dark

# Footnotes

Only the most cautious person will see this. If you did see this, you are awesome :)

> :Footnotes
