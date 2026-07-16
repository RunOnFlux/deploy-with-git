require_relative "boot"

require "rails"
require "active_model/railtie"
require "action_controller/railtie"
require "action_view/railtie"

Bundler.require(*Rails.groups)

module DeployRails
  class Application < Rails::Application
    config.load_defaults 7.1
    config.eager_load = true
    config.secret_key_base = 'deploy-rails-hello-world-demo-secret-key-base-not-for-production-use'
  end
end
