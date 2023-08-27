module Base
  private

  def bills
    File.read('./bills.json')
  end

  def bill
    @bill ||= parsed_bills.find { |bill| bill['id'] == params[:id]&.to_i }
  end

  def parsed_bills
    @parsed_bills ||= JSON.parse(bills)
  end

  def current_day
    @current_day ||= Date.today.strftime('%d')
  end

  def paid
    @paid ||= params[:paid] == 'true'
  end

  def update_bill
    bill['paid_on'] = paid ? current_day : ''

    File.write('./bills.json', JSON.dump(parsed_bills)) && json(bill)
  end
end
