class App < Hanami::API
  helpers(Base)

  get '/' do
    bills
  end

  put '/bills/:id' do
    halt(404, 'Bill not found') unless bill

    if !%w[true false].include?(params[:paid])
      halt(422, 'Attribute :paid is incorrect')
    end

    update_bill
  end
end
