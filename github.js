class Github {
  constuctor() {
    this.client_id = 'fa19bcce3d2c90d28120';
    this.client_secret = '3cff7fff1d5dda485e937763f9d316b34918bfba';
  }
  async getUser(user) {
    const profileRequest = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileRequest.json();
    return {
      profile
    }
  }
}