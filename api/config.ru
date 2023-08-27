# frozen_string_literal: true

require "bundler/setup"
require "hanami/api"
require "pry"
require "hanami/middleware/body_parser"

require_relative "base"
require_relative "app"

use Hanami::Middleware::BodyParser, :json

run App.new
