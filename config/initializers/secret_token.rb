# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
BookKeeper::Application.config.secret_key_base = '25e62c0cfa1810235896b8804657950320adf2dd99705c7b7c880eead1186abf9c14c33d8dc642a63aadb9101597f9dbe8f27ee75014ddfff99308e94781142b'
