<!-- We will hit 100 commits in one WEEK?! I have 75 commits ALREADY?! OH. MY. GOD. -->
# The milestones
- Let's hit 100 commits before September 30 :boom: :rocket: 🌩️
# Memorable Times...

- On 17 of August on 2021, we hit ***102*** commits. 102?! That is a `!!` move! And it's not even 31st of September!


# For going to my Gitpod. If you see a [`typo`](https://github.com/im-coder-lg/coder-lg-blog-codedoc/blob/master/README.md#improvements), click the SVG, the website will be served automatically, and it is secure. You must login to Gitpod via GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/im-coder-lg/coder-lg-blog-codedoc)

# credits to [***`@TysonMN`***](https://GitHub.com/TysonMN) for the blog!

## Essential

To locally host this site, follow these steps.

### First time

Clone this repo and execute
```bash
npm i -g @codedoc/cli
codedoc install
```

to obtain all npm dependencies.

### Every time

Execute
```bash
codedoc serve
```

to begin serving the website at [localhost:3000](http://localhost:3000).

## Additional

There are some additional [dependencies of `codedoc/cli`](https://codedoc.cc/docs/cli#cli) that might need to be installed first.

If port `3000` is being used, then a different one can be specified in the [configuration](https://codedoc.cc/docs/config/overview#available-properties).

### Updating

- Execute `codedoc update latest` from `.codedoc` directory in a Windows terminal to update `codedoc/cli`
- Execute `codedoc update latest --local` to update `codedoc/core`
- Execute `codedoc install @codedoc/coding-blog-plugin` to update `coding-blog-plugin`

I have to update `codedoc/cli` from a Windows terminal because of [this issue](https://github.com/CONNECT-platform/codedoc/issues/22).

# Acknowledgements

I could not have created this blog without lots of help.

## Technologies

These wonderful technologies are used to make this site.

### [`coding.blog`](https://coding.blog)

This blog is primarily powered by the [CONNECT-platform](https://github.com/CONNECT-platform).  It is deployed and hosted by [`coding.blog`](https://coding.blog) and most of the markdown features come from [CODEDOC](https://codedoc.cc/).

I was fortunate to be granted early access to `coding.blog`.  If you would like a blog like this, then go [here](https://coding.blog/#how-to-get-there) and join their Prospective Creators List.

Eventually, you can financially support `coding.blog` in exchange for a personally curated content feed.  For now, you can go [here](https://coding.blog/#how-to-get-there) and join their Waiting List for Beta.

### [utterances](https://utteranc.es/)

Support for comments on posts is powered by utterances.  The comments are stored in post-specific issues in this GitHub repo.  Anyone with a GitHub account can add a comment.  If you authorize the utterances bot to post on your behalf, then you can add a comment directly from the post.  Otherwise, you can simply navigate from the post to the backing issue using the link provided above the first comment and post there yourself.

### GitHub

Of course GitHub also plays a crucial role.  In addition to hosting the comments in select issues, all the content is committed into this repo.  The website is redeployed shortly after I activate my non-commited batch file that has a curl command to send a request. Useful for `suspense`

# Improvements?

Is there some improvement that you would like to see in my blog?  You can tell me about it by [creating an issue](https://github.com/coder-lg/coder-lg-blog-codedoc/issues/new) or you can make the improvement yourself and then send me a [pull request](https://github.com/coder-lg-blog-codedoc/compare).
