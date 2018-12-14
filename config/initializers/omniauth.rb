Rails.application.config.middleware.use OmniAuth::Builder do
    provider :coinbase, ENV["
    c8b658e2b5e7faf04b9caec54b125f40660581766197de204fc2497a5694402f"], ENV["24d57dad1bbde7099aeb4261b6afefa82b928ee8ef671956ac134f2cf6429fee"]
  end


