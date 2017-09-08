require './conf.rb'
  
client = DiscourseApi::Client.new(@discourse[:url])
client.api_key = @discourse[:key]
client.api_username = @discourse[:user]

@topic_tpl = File.open('topic.tpl').read
@subject_tpl = File.open('subject.tpl').read

files = Dir.entries("../lib/").select {|f| !File.directory? f}
files.each do |file|
  begin
    skill = JSON.parse(open("../lib/" + file).read)
    @variables = {
      skill: skill
    }

    subject = Mustache.render(@subject_tpl, @variables)
    body = Mustache.render(@topic_tpl, @variables)

    @data = {
      category: @discourse[:category],
      skip_validations: true,
      auto_track: false,
      title: subject,
      raw: body,
      created_at: '2017-04-03'
    }
    search = client.search("\"skill_" + skill["id"] + "_id\"")
    if search["posts"].count == 0
      create = client.create_topic(@data)
      client.wikify_post(create["id"]);
      puts "Created: " + skill["id"]
    else      
      client.rename_topic(search["posts"][0]["topic_id"], subject)
      client.edit_post(search["posts"][0]["id"], body);
      client.wikify_post(search["posts"][0]["id"]);
      client.edit_topic_timestamp(search["posts"][0]["topic_id"], 1491199200);
      puts "Updated: " + skill["id"]
    end
    sleep(1)
  rescue DiscourseApi::Error => e
  end
end