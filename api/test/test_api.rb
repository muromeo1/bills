require 'minitest/autorun'
require 'rack/test'

OUTER_APP = Rack::Builder.parse_file('config.ru').first

class TestApp < Minitest::Test
  include Rack::Test::Methods

  def app
    OUTER_APP
  end

  def bills
    @bills ||= File.read('./bills.json')
  end

  def parsed_body
    @parsed_body ||= JSON.parse(last_response.body)
  end

  def test_root
    get '/'

    assert last_response.body == bills
  end

  def test_pay_bill
    put '/bills/1', paid: true

    assert parsed_body['paid_on'] == Date.today.strftime('%d')
  end

  def test_unpay_bill
    put '/bills/1', paid: false

    assert parsed_body['paid_on'] == ''
  end
end
