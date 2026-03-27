require 'rails'
require 'action_controller/railtie'
require 'action_view/railtie'

module DeployRails
  class Application < Rails::Application
    config.load_defaults 7.1
    config.eager_load = true
    config.consider_all_requests_local = false
    config.log_level = :info
    config.logger = Logger.new($stdout)
    config.secret_key_base = 'deploy-rails-hello-world-demo-secret-key-base-not-for-production-use'
  end
end
