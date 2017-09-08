require 'rubygems'
require "discourse_api"
require "mustache"

@discourse = {
  url: ARGV[0] || 'http://localhost:8099/',
  key: ARGV[1] || '27388a309df162a28e24eb5d8e0378eaec4180ac391bb29eac596608f5d15286',
  user: 'system',

  category: 'Gamedev Skills',
}

@verbose = true