var I18n = I18n || {};
I18n.translations = {"zh-tw":{"devise":{"confirmations":{"confirmed":"\u60a8\u7684 email \u6210\u529f\u5730\u78ba\u8a8d\u4e86\u3002","link":"\u6c92\u6709\u6536\u5230\u9a57\u8b49\u78bc\uff1f","send_instructions":"\u5e7e\u5206\u9418\u4e4b\u5f8c\uff0c\u60a8\u7684\u5c07\u6703\u6536\u5230\u96fb\u5b50\u90f5\u4ef6\u4ee5\u4f9b\u9a57\u8b49\u3002","send_paranoid_instructions":"\u5982\u679c\u60a8\u7684\u5e33\u865f\u5b58\u5728\uff0c\u5e7e\u5206\u9418\u5f8c\u60a8\u5c07\u6703\u6536\u5230\u4e00\u5c01\u9a57\u8b49\u4fe1\u3002"},"destroy":{"confirm":"\u4f60\u78ba\u5b9a\u55ce\uff1f","headline":"\u522a\u9664\u5e33\u865f","link":"\u73fe\u5728\u522a\u9664"},"edit":{"form":{"labels":{"current_password":"\u76ee\u524d\u5bc6\u78bc<i>(\u6211\u5011\u9700\u8981\u5b83\u4ee5\u78ba\u8a8d\u4f60\u7684\u4fee\u6539)</i>","email":"\u96fb\u5b50\u90f5\u4ef6","password":"\u5bc6\u78bc <i>\u5982\u679c\u4e0d\u60f3\u66f4\u52d5\uff0c\u8acb\u7559\u7a7a</i>","password_confirmation":"\u78ba\u8a8d\u5bc6\u78bc"},"submit":"\u5132\u5b58\u8b8a\u66f4"},"headline":"\u7de8\u8f2f\u5e33\u865f"},"failure":{"already_authenticated":"\u60a8\u5df2\u7d93\u767b\u5165","inactive":"\u60a8\u9084\u6c92\u6709\u555f\u52d5\u5e33\u865f\u3002","invalid":"\u7121\u6548\u7684\u96fb\u5b50\u4fe1\u7bb1\u6216\u5bc6\u78bc","invalid_token":"\u8a8d\u8b49\u5931\u6557","locked":"\u60a8\u7684\u5e33\u865f\u88ab\u9396\u5b9a\u4e86","timeout":"\u60a8\u7684\u767b\u5165\u5df2\u7d93\u903e\u6642\uff0c\u8acb\u91cd\u65b0\u767b\u5165\u4ee5\u7e7c\u7e8c\u64cd\u4f5c\u3002","unauthenticated":"\u60a8\u5fc5\u9808\u767b\u5165\u6216\u8a3b\u518a\u5e33\u865f\u624d\u80fd\u7e7c\u7e8c","unconfirmed":"\u60a8\u5fc5\u9808\u78ba\u8a8d\u60a8\u7684\u5e33\u865f\u4ee5\u7e7c\u7e8c\u64cd\u4f5c\u3002"},"mailer":{"confirmation_instructions":{"landing_page":"\u8acb\u5728\u6211\u5011\u767c\u7d66\u4f60\u7684\u78ba\u8a8d\u4fe1\u4e2d\u9ede\u53d6\u9023\u7d50\u3002\u5982\u679c\u60a8\u6c92\u6709\u6536\u5230\uff0c\u8acb\u5148\u6aa2\u67e5\u5783\u573e\u90f5\u4ef6\u7bb1\uff1b\u82e5\u4ecd\u6c92\u6709\uff0c\u8acb\u81f3\u8a3b\u518a\u9801\u9762\u518d\u8a66\u4e00\u6b21\u3002","subject":"\u518d\u4e00\u500b\u6b65\u9a5f\u5c31\u80fd\u555f\u52d5\u60a8\u7684\u5e33\u865f\u3002"},"reset_password_instructions":{"subject":"\u91cd\u8a2d\u5bc6\u78bc"},"unlock_instructions":{"subject":"\u89e3\u9396\u78bc"}},"mandatory":"* \u5fc5\u9808\u7684","omniauth_callbacks":{"failure":"\u56e0\u70ba %{reason}\uff0c\u6240\u4ee5\u60a8\u7121\u6cd5\u900f\u904e %{kind} \u767b\u5165\u3002","permission_missing":"\u60a8\u6c92\u6709\u88ab\u6388\u4e88\u6b0a\u9650\u3002","success":"\u6210\u529f\u7684\u900f\u904e %{kind} \u767b\u5165\u3002"},"password_recovery":{"form":{"labels":{"email":"\u96fb\u5b50\u90f5\u4ef6"},"submit":"\u91cd\u8a2d\u5bc6\u78bc"},"headline":"\u5fd8\u8a18\u5bc6\u78bc\uff1f"},"password_reset":{"email":{"comment":"\u5982\u679c\u60a8\u6c92\u6709\u7533\u8acb\u91cd\u8a2d\u5bc6\u78bc\uff0c\u8acb\u5ffd\u7565\u6b64\u90f5\u4ef6<br/>\u9664\u975e\u9ede\u9078\u4ee5\u4e0a\u9023\u7d50\u4e26\u8a2d\u5b9a\u5fc3\u5bc6\u78bc\uff0c\u60a8\u7684\u5bc6\u78bc\u4e0d\u6703\u88ab\u66f4\u6539\u3002","headline":"\u6b61\u8fce %{email}","link":"\u66f4\u6539\u6211\u7684\u5bc6\u78bc","text":"\u525b\u525b\u6211\u5011\u6536\u5230\u4e86\u5c0d\u60a8\u7684\u5e33\u865f\u91cd\u8a2d\u5bc6\u78bc\u7684\u8981\u6c42\uff0c\u5982\u679c\u662f\u60a8\u672c\u4eba\u7684\u8a71\uff0c\u8acb\u9ede\u9078\u4e0b\u5217\u9023\u7d50 - \u5982\u679c\u4e0d\u662f\u60a8\uff0c\u8acb\u5ffd\u7565\u672c\u4fe1\u4ef6\u3002"},"form":{"labels":{"password":"\u65b0\u5bc6\u78bc","password_confirmation":"\u91cd\u8907\u5bc6\u78bc"},"submit":"\u91cd\u8a2d\u5bc6\u78bc"},"headline":"\u91cd\u8a2d\u5bc6\u78bc"},"passwords":{"link":"\u5fd8\u8a18\u5bc6\u78bc\uff1f","send_instructions":"\u5e7e\u5206\u9418\u5f8c\uff0c\u60a8\u5c07\u6703\u6536\u5230\u91cd\u8a2d\u5bc6\u78bc\u7684\u96fb\u5b50\u90f5\u4ef6\u3002","send_paranoid_instructions":"\u5982\u679c\u60a8\u7684\u5e33\u865f\u5b58\u5728\uff0c\u5e7e\u5206\u9418\u5f8c\u60a8\u5c07\u6703\u6536\u5230\u4e00\u5c01\u91cd\u8a2d\u5bc6\u78bc\u9a57\u8b49\u4fe1\u3002","updated":"\u60a8\u7684\u5bc6\u78bc\u4fee\u6539\u6210\u529f\uff0c\u60a8\u73fe\u5728\u5df2\u7d93\u767b\u5165\u4e86\u3002","updated_not_active":"\u60a8\u5df2\u6210\u529f\u4fee\u6539\u5bc6\u78bc\u3002"},"registrations":{"destroyed":"\u518d\u898b\uff01\u60a8\u7684\u5e33\u865f\u5df2\u7d93\u6210\u529f\u522a\u9664\u3002\u6211\u5011\u5e0c\u671b\u53ef\u4ee5\u5f88\u5feb\u518d\u898b\u5230\u60a8\u3002","inactive_signed_up":"\u60a8\u5df2\u7d93\u8a3b\u518a\u6210\u529f\uff0c\u4f46\u56e0\u70ba %{reason} \uff0c\u60a8\u73fe\u5728\u5c1a\u4e0d\u80fd\u767b\u5165\u3002","link":"\u8a3b\u518a\u5e33\u865f","reasons":{"inactive":"\u672a\u555f\u52d5","locked":"\u5df2\u9396\u5b9a","unconfirmed":"\u672a\u78ba\u8a8d"},"signed_up":"\u60a8\u5df2\u7d93\u8a3b\u518a\u6210\u529f\u3002\u5c07\u6703\u5bc4\u51fa\u78ba\u8a8d\u96fb\u5b50\u90f5\u4ef6\u3002","updated":"\u60a8\u5df2\u7d93\u6210\u529f\u66f4\u65b0\u60a8\u7684\u5e33\u865f\u3002"},"sessions":{"inactive":"\u60a8\u7684\u5e33\u865f\u5c1a\u672a\u5553\u7528","invalid":"\u7121\u6548\u7684 email \u6216\u5bc6\u78bc\u3002","invalid_token":"\u8a8d\u8b49\u5931\u6557","link":"\u767b\u5165","locked":"\u60a8\u7684\u5e33\u865f\u5df2\u88ab\u51cd\u7d50","new":{"no_osm_account":"\u9084\u6c92\u6709 OpenStreetMap \u7684\u5e33\u865f\u55ce\uff1f","osm_promo_text":"Wheelmap \u5960\u57fa\u65bc OpenStreetMap (OSM) \u7684\u5730\u7406\u8cc7\u8a0a\u3002OpenStreetMap \u662f\u81ea\u7531\u7684\u4e16\u754c\u5730\u5716\uff0c\u7531\u50cf\u60a8\u9019\u6a23\u7684\u4eba\u5011\u6240\u8ca2\u737b\uff0c\u5c31\u50cf\u5730\u5716\u754c\u7684\u7dad\u57fa\u767e\u79d1\u3002\u82e5\u6b32\u7de8\u8f2f\u6216\u65b0\u589e\u5730\u9ede\uff0c\u60a8\u9700\u8981\u64c1\u6709\u4e26\u767b\u5165\u4e00\u500b OpenStreetMap \u5e33\u865f\u3002","promo_text_thank_you":"\u975e\u5e38\u611f\u8b1d\u60a8\u7684\u8ca2\u737b\uff01","sign_in_with":"\u900f\u904e %{kind} \u65b9\u5f0f\u767b\u5165","sign_up_with_osm":"\u73fe\u5728\u5c31\u8a3b\u518a\u3002","wheelmap_promo_text":"\u56e0\u70ba\u4f60\u8ca2\u737b\u8f2a\u6905\u7121\u969c\u7919\u7a7a\u9593\u7684\u8cc7\u8a0a\uff0c\u8eab\u969c\u670b\u53cb\u53ef\u4ee5\u66f4\u6709\u6548\u7684\u898f\u5283\u81ea\u5df1\u6bcf\u4e00\u5929\u7684\u751f\u6d3b\u3002\u9644\u5e36\u4e00\u63d0\uff0cOpenStreetMap \u63d0\u4f9b\u66f4\u8c50\u5bcc\u7684\u7d30\u7bc0\u3002"},"signed_in":"\u6210\u529f\u767b\u5165","signed_out":"\u60a8\u5df2\u7d93\u6210\u529f\u767b\u51fa\u4e86\u3002","timeout":"\u60a8\u7684\u767b\u5165\u5df2\u7d93\u903e\u6642\uff0c\u8acb\u91cd\u65b0\u767b\u5165\u4ee5\u7e7c\u7e8c\u64cd\u4f5c\u3002","unauthenticated":"\u60a8\u5fc5\u9808\u767b\u5165\u6216\u8a3b\u518a\u4ee5\u7e7c\u7e8c\u64cd\u4f5c\u3002","unconfirmed":"\u60a8\u5fc5\u9808\u78ba\u8a8d\u60a8\u7684\u5e33\u865f\u4ee5\u7e7c\u7e8c\u64cd\u4f5c"},"sign_in":{"form":{"labels":{"email":"E-mail","password":"\u5bc6\u78bc","remember_me":"\u7dad\u6301\u767b\u5165\u72c0\u614b\uff1f"},"submit":"\u767b\u5165"},"headline":"\u767b\u5165"},"sign_out":{"headline":"\u767b\u51fa"},"sign_up":{"email":{"confirm_my_account":"\u78ba\u8a8d\u6211\u7684\u5e33\u865f","please_confirm":"\u60a8\u53ef\u4ee5\u9ede\u9078\u4e0b\u5217\u9023\u7d50\u4ee5\u78ba\u8a8d\u60a8\u7684\u5e33\u865f\uff1a","welcome":"\u6b61\u8fce %{email}!"},"form":{"labels":{"email":"\u96fb\u5b50\u90f5\u4ef6","password":"\u5bc6\u78bc","password_confirmation":"\u78ba\u8a8d\u5bc6\u78bc","wants_newsletter":"\u662f\u7684\uff0c\u6211\u8981\u8ffd\u8e64 Wheelmap \u7684\u6d88\u606f\uff0d\u4f46\u662f\u4e00\u500b\u6708\u4e0d\u8d85\u904e\u4e00\u6b21\u3002"},"submit":"\u8a3b\u518a\u5e33\u865f"},"headline":"\u8a3b\u518a"},"unlocks":{"link":"\u6c92\u6709\u6536\u5230\u89e3\u9396\u6587\u4ef6\uff1f","send_instructions":"\u5e7e\u5206\u9418\u5f8c\uff0c\u60a8\u5c07\u6536\u5230\u4e00\u5c01\u89e3\u9396\u5e33\u865f\u7684\u4fe1\u4ef6\u3002","send_paranoid_instructions":"\u5982\u679c\u60a8\u7684\u5e33\u865f\u5b58\u5728\uff0c\u5e7e\u5206\u9418\u5f8c\u60a8\u5c07\u6703\u6536\u5230\u4e00\u5c01\u89e3\u9396\u9a57\u8b49\u4fe1\u3002","unlocked":"\u60a8\u7684\u5e33\u865f\u5df2\u7d93\u6210\u529f\u89e3\u9396\u3002\u60a8\u73fe\u5728\u5df2\u7d93\u767b\u5165\u3002"}},"poi":{"category":{"accommodation":"\u4f4f\u5bbf","education":"\u6559\u80b2","food":"\u98df\u7269","government":"\u653f\u5e9c","health":"\u91ab\u7642","leisure":"\u4f11\u9592","misc":"\u5176\u4ed6","money_post":"\u9280\u884c/\u90f5\u5c40","public_transfer":"\u5927\u773e\u904b\u8f38","shopping":"\u8cfc\u7269","sport":"\u904b\u52d5","tourism":"\u89c0\u5149","unknown":"\u672a\u77e5"},"name":{"accommodation":{"beach_resort":"\u6d77\u7058\u98ef\u5e97","bed_and_breakfast":"\u4f4f\u5bbf\u548c\u65e9\u9910","camp_site":"\u9732\u71df\u5340","caravan_site":"\u7bf7\u8eca\u9732\u71df\u5730","chalet":"\u8fb2\u820d","dormitory":"\u5bbf\u820d","guest_house":"\u6c11\u5bbf","hostel":"\u9752\u5e74\u65c5\u9928","hotel":"\u65c5\u9928","motel":"\u6c7d\u8eca\u65c5\u9928"},"education":{"college":"\u5b78\u9662","driving_school":"\u99d5\u99db\u8a13\u7df4\u73ed","kindergarten":"\u5e7c\u7a1a\u5712","library":"\u5716\u66f8\u9928","museum":"\u535a\u7269\u9928","school":"\u5b78\u6821","university":"\u5927\u5b78"},"food":{"bar":"\u9152\u5427","biergarten":"\u5564\u9152\u82b1\u5712","cafe":"\u5496\u5561","drinking_water":"\u98f2\u7528\u6c34","fast_food":"\u901f\u98df","ice_cream":"\u51b0\u6dc7\u6dcb\u5e97","pub":"Pub","restaurant":"\u9910\u5ef3"},"government":{"courthouse":"\u6cd5\u9662","embassy":"\u5927\u4f7f\u9928","government":"\u653f\u5e9c\u90e8\u9580","police":"\u8b66\u5bdf\u5c40","public_building":"\u516c\u5171\u5efa\u7bc9","townhall":"\u5e02\u653f\u5ef3"},"health":{"dentist":"\u7259\u91ab","doctors":"\u8a3a\u6240","hearing_aids":"\u52a9\u807d\u5668","hospital":"\u91ab\u9662","medical_supply":"\u91ab\u7642\u7528\u54c1","pharmacy":"\u85e5\u5c40","social_facility":"\u793e\u6703\u6a5f\u69cb","veterinary":"\u7378\u91ab"},"leisure":{"arena":"\u5de8\u86cb","brothel":"\u5993\u9662","casino":"\u8ced\u5834","cinema":"\u96fb\u5f71\u9662","community_center":"\u793e\u5340\u6d3b\u52d5\u4e2d\u5fc3","gallery":"\u756b\u5eca","nightclub":"\u591c\u7e3d\u6703","playground":"\u904a\u6a02\u5668\u6750","sauna":"\u6851\u62ff","stripclub":"\u812b\u8863\u821e\u5e97","theatre":"\u6232\u9662","zoo":"\u52d5\u7269\u5712"},"misc":{"company":"\u516c\u53f8\u884c\u865f (\u8fa6\u516c\u5ba4)","estate_agent":"\u623f\u5730\u7522\u4ef2\u4ecb","insurance":"\u4fdd\u96aa","lawyer":"\u5f8b\u5e2b","place_of_worship":"\u5b97\u6559\u5834\u6240","toilets":"\u5ec1\u6240"},"money_post":{"atm":"\u81ea\u52d5\u6ac3\u54e1\u6a5f","bank":"\u9280\u884c","bureau_de_change":"\u63db\u532f\u8655","post_box":"\u90f5\u7b52","post_office":"\u90f5\u5c40"},"public_transfer":{"aerodrome":"\u6a5f\u5834","bicycle_parking":"\u81ea\u884c\u8eca\u505c\u8eca\u5834","bicycle_rental":"\u81ea\u884c\u8eca\u51fa\u79df","boatyard":"\u8239\u5c4b","bus_station":"\u516c\u8eca\u7ad9","bus_stop":"\u516c\u8eca\u7ad9","cable_car":"\u7e9c\u8eca","car_rental":"\u79df\u8eca","car_sharing":"\u5171\u4e58","chair_lift":"\u5347\u964d\u6905","ferry":"\u6e21\u8239\u982d","ferry_terminal":"\u6e21\u8239\u78bc\u982d","fuel":"\u52a0\u6cb9\u7ad9","halt":"\u505c\u9760\u7ad9","light_rail":"\u8f15\u8ecc","parking":"\u505c\u8eca\u5834","parking_aisle":"\u505c\u8eca\u5834\u8eca\u9053","platform":"\u6708\u53f0","station":"\u706b\u8eca\u7ad9","subway_entrance":"\u6377\u904b\u51fa\u53e3","terminal":"\u6a5f\u5834\u822a\u5ec8","tram_stop":"\u96fb\u8eca\u7ad9"},"shopping":{"alcohol":"\u9152","bakery":"\u70d8\u7119\u574a","beauty":"\u7f8e\u5bb9\u5e97","beverages":"\u98f2\u6599","bicycle":"\u81ea\u884c\u8eca\u5e97","books":"\u66f8\u5e97","butcher":"\u8089\u5e97","car_repair":"\u6c7d\u8eca\u7dad\u4fee","car_shop":"\u8eca\u884c","chemist":"\u85e5\u5c40","clothes":"\u670d\u98fe","computer":"\u96fb\u8166\u5e97","confectionery":"\u9ede\u5fc3\u5e97","convenience":"\u4fbf\u5229\u5546\u5e97","deli":"\u719f\u98df\u5e97","department_store":"\u767e\u8ca8\u516c\u53f8","doityourself":"DIY","dry_cleaning":"\u4e7e\u6d17","electronics":"\u96fb\u5b50\u7522\u54c1","fabric":"\u5e03\u5e97","farm_shop":"\u8fb2\u7522\u54c1","florist":"\u82b1\u5e97","furniture":"\u5bb6\u5177","garden_centre":"\u5712\u85dd","gift":"\u79ae\u54c1\u5e97","hairdresser":"\u9aee\u578b\u5e2b","hardware":"\u4e94\u91d1\u884c","jewelry":"\u73e0\u5bf6\u9280\u6a13","kiosk":"\u66f8\u5831\u4ead","laundry":"\u6d17\u8863\u5e97","mall":"\u8cfc\u7269\u4e2d\u5fc3","optician":"\u9a57\u5149\u5e2b/\u773c\u93e1\u884c","organic":"\u6709\u6a5f\u5546\u5e97","outdoor":"\u6236\u5916\u7528\u54c1","pet":"\u5bf5\u7269\u5e97","photo":"\u76f8\u9928","second_hand":"\u4e8c\u624b\u5e97","shoes":"\u978b\u5e97","sports":"\u904b\u52d5","stationery":"\u6587\u5177\u5e97","supermarket":"\u8d85\u7d1a\u5e02\u5834","toys":"\u73a9\u5177\u5e97","travel_agency":"\u65c5\u884c\u793e","video":"\u5f71\u7247\u51fa\u79df\u5e97"},"sport":{"pitch":"\u64cd\u5834","sports_centre":"\u9ad4\u80b2\u4e2d\u5fc3","stadium":"\u9ad4\u80b2\u5834","swimming":"\u6e38\u6cf3","swimming_pool":"\u6e38\u6cf3\u6c60"},"tourism":{"archaeological_site":"\u8003\u53e4\u907a\u8de1","arts_centre":"\u85dd\u8853\u4e2d\u5fc3","artwork":"\u85dd\u8853\u54c1","attraction":"\u666f\u9ede","battlefield":"\u53e4\u6230\u5834","beach":"\u6d77\u7058","beacon":"\u71c8\u5854","castle":"\u57ce\u5821/\u57ce\u6c60","cave_entrance":"\u6d1e\u53e3","information":"\u65c5\u5ba2\u8cc7\u8a0a\u7ad9","memorial":"\u7d00\u5ff5\u9928","theme_park":"\u4e3b\u984c\u516c\u5712","tower":"\u5854","viewpoint":"\u89c0\u666f\u53f0"},"unknown":{"unknown":"\u672a\u77e5"}}},"activerecord":{"attributes":{"user":{"first_name":"\u540d","last_name":"\u59d3\u6c0f","privacy_policy":"\u96b1\u79c1\u653f\u7b56","terms":"\u4f7f\u7528\u689d\u6b3e"}},"errors":{"full_messages":{"format":"%{attribute} %{message}"},"messages":{"accepted":"\u5fc5\u9808\u88ab\u63a5\u53d7","blank":"\u4e0d\u80fd\u7559\u767d","confirmation":"\u8207\u78ba\u8a8d\u503c\u4e0d\u7b26\u5408","empty":"\u4e0d\u80fd\u7559\u7a7a","equal_to":"\u5fc5\u9808\u7b49\u65bc %{count}","even":"\u5fc5\u9808\u662f\u5076\u6578","exclusion":"\u5df2\u88ab\u9810\u5b9a","greater_than":"\u5fc5\u9808\u5927\u65bc %{count}","greater_than_or_equal_to":"\u5fc5\u9808\u5927\u65bc\u7b49\u65bc %{count}","inclusion":"\u4e0d\u5728\u6e05\u55ae\u4e2d","invalid":"\u7121\u6548","less_than":"\u5fc5\u9808\u5c11\u65bc %{count}","less_than_or_equal_to":"\u5fc5\u9808\u5c0f\u65bc\u6216\u7b49\u65bc %{count}","not_a_number":"\u4e0d\u662f\u6578\u5b57","odd":"\u5fc5\u9808\u662f\u5947\u6578","record_invalid":"\u9a57\u8b49\u5931\u6557: %{errors}","taken":"\u5df2\u88ab\u4f7f\u7528","too_long":"\u592a\u9577 (\u6700\u9577 %{count} \u500b\u5b57\u5143)","too_short":"\u592a\u77ed (\u6700\u77ed\u70ba %{count} \u500b\u5b57\u5143)","wrong_length":"\u9577\u5ea6\u4e0d\u7b26 (\u5fc5\u9808\u70ba %{count} \u500b\u5b57\u5143) "},"models":{"user":{"attributes":{"email":{"blank":"\u82e5\u6709\u5bc6\u78bc\u5fc5\u9808\u586b\u5beb"},"privacy_policy":{"accepted":"\u5fc5\u9808\u88ab\u63a5\u53d7"},"terms":{"accepted":"\u5fc5\u9808\u88ab\u63a5\u53d7"}}},"user_session":{"email":"\u96fb\u5b50\u90f5\u4ef6","password":"\u5bc6\u78bc","remember_me":"\u4fdd\u6301\u767b\u5165"}},"template":{"body":"\u4ee5\u4e0b\u6b04\u4f4d\u51fa\u73fe\u554f\u984c\uff1a","header":{"one":"\u56e0\u70ba\u4e00\u500b\u932f\u8aa4\u5c0e\u81f4 %{model} \u7121\u6cd5\u5b58\u6a94","other":"%{count} \u500b\u932f\u8aa4\u5c0e\u81f4\u6b64 %{model} \u5b58\u6a94\u5931\u6557\u3002"}}},"models":{"user":"\u4f7f\u7528\u8005"}},"header":{"navigation":{"about_wheelmap":"\u95dc\u65bc Wheelmap","choose_language":"\u9078\u64c7\u8a9e\u8a00","contact":"\u806f\u7e6b\u6211\u5011","map":"\u5730\u5716","projects":"\u53c3\u8207\u9019\u500b\u5c08\u6848","blog":"\u90e8\u843d\u683c","feedback":"\u56de\u994b","home":"\u958b\u59cb","how_to_add_a_place":"\u5982\u4f55\u65b0\u589e\u5730\u9ede\uff1f","imprint":"\u806f\u7e6b\u6211\u5011","logged_in_as":"\u767b\u5165\u4ee5","login":"\u767b\u5165","logout":"\u767b\u51fa","newsletter":"\u96fb\u5b50\u5831","press":"\u6587\u5ba3","profile":"\u6a94\u6848","suggestions":"\u5efa\u8b70","what_is_barrier_free":"\u300c\u8f2a\u6905\u7121\u969c\u7919\u300d\u662f\u4ec0\u9ebc\u610f\u601d\uff1f","what_is_wheelmap":"Wheelmap \u662f\u4ec0\u9ebc?"},"toolbar":{"categories":"\u5206\u985e"},"meta":{"description":"\u5c0b\u627e\u8f2a\u6905\u7121\u969c\u7919\u7a7a\u9593\uff0dwheelmap.org","homepage":"\u9996\u9801","keywords":"\u5c0b\u627e\u8f2a\u6905\u7121\u969c\u7919\u7a7a\u9593\u7684\u6a19\u8a8c","search":"\u641c\u5c0b"},"searchbar":{"add_place":"\u65b0\u589e\u4e0b\u4e00\u500b\u5730\u9ede","find":"\u641c\u5c0b","label":" ","placeholder":"\u4f8b\u5982\uff1a\u6d1b\u6749\u78ef\u7684\u65e5\u843d\u5927\u9053\u6216\u662f\u67cf\u6797\u7684\u5e03\u862d\u767b\u5821\u9580","title_add_place":"\u5728\u9019\u500b\u4f4d\u7f6e\u65b0\u589e\u5730\u9ede"},"tagline":"Wheelmap logo","title":"Wheelmap - \u5c0b\u627e\u8f2a\u6905\u7121\u969c\u7919\u7a7a\u9593"},"home":{"index":{"overlay":{"button":"OK\uff0c\u8d70\u5427","categories":"\u7be9\u9078\u5730\u9ede\u7684\u7a2e\u985e","filter":"\u7be9\u9078\u5730\u9ede\u7684\u8f2a\u6905\u7121\u969c\u7919\u7a0b\u5ea6","headline":"\u900f\u904e Wheelmap.org \u6a19\u793a\u548c\u5c0b\u627e\u8f2a\u6905\u7121\u969c\u7919\u7a7a\u9593 - \u5168\u7403\u5316\u800c\u514d\u8cbb\u3002\u9019\u4e26\u4e0d\u56f0\u96e3\uff1a","lookup":"\u641c\u5c0b\u7279\u5b9a\u5730\u9ede","secondary_headline":"\u6211\u5011\u4ee5\u985e\u4f3c\u300c\u7d05\u7da0\u71c8\u300d\u7684\u65b9\u5f0f\u6a19\u793a\u516c\u5171\u7a7a\u9593\u7684\u8f2a\u6905\u7121\u969c\u7919\u7a0b\u5ea6\uff1a"},"filter":{"category":"\u9078\u64c7\u5206\u985e","deselect_all":"\u5168\u90e8\u53d6\u6d88\u9078\u64c7","select_all":"\u5168\u90e8\u9078\u64c7","wheelchair":"\u8f2a\u6905\u7121\u969c\u7919\uff1f"},"ie":{"action":{"ignore":"\u5ffd\u7565","upgrade":"\u66f4\u65b0\u700f\u89bd\u5668"},"warning":{"headline":"\u6211\u5011\u5f88\u62b1\u6b49\uff01","message":"\u60a8\u73fe\u5728\u4f7f\u7528\u7684\u662f Internet Explorer\u3002Wheelmap \u9700\u8981\u8207\u6a19\u6e96\u76f8\u5bb9\u7684\u700f\u89bd\u5668\u624d\u80fd\u6b63\u5e38\u986f\u793a\u3002\u8acb\u8003\u616e\u4f7f\u7528 Firefox\u3001Chrome\u3001Safari \u6216 Opera \u7b49\u5176\u5b83\u700f\u89bd\u5668\u3002"}},"link":{"node":{"create":"\u65b0\u589e\u5730\u9ede"}},"popup":{"form":{"limited":"\u90e8\u5206\u8f2a\u6905\u7121\u969c\u7919","no":"\u975e\u8f2a\u6905\u7121\u969c\u7919","save":"\u66f4\u65b0","unknown":"\u672a\u77e5\u72c0\u614b","yes":"\u8f2a\u6905\u7121\u969c\u7919"},"help":"\u8f2a\u6905\u7121\u969c\u7919\uff1f(\u8aaa\u660e)","more":"\u66f4\u591a..."}}},"nodes":{"new":{"form":{"legend":"\u5730\u9ede\u7684\u4f4d\u7f6e","location":"\u8acb\u9ede\u9078\u5730\u5716\u4e26\u6a19\u8a8c\u5728\u78ba\u5207\u7684\u4f4d\u7f6e\u3002"},"header":{"title":"\u65b0\u5730\u9ede| wheelmap.org"},"link":{"large_map":"&laquo; \u53d6\u6d88"}},"create":{"flash":{"not_successfull":"\u5509\u5440\uff01\u60a8\u8f38\u5165\u7684\u8cc7\u8a0a\u4e0d\u6b63\u78ba\u6216\u4e0d\u5b8c\u6574","successfull":"\u8b1d\u8b1d\uff0c\u60a8\u63d0\u4f9b\u7684\u8cc7\u8a0a\u5df2\u6210\u529f\u5b58\u6a94\u4e26\u5f88\u5feb\u6703\u5728\u7dda\u4e0a\u986f\u793a\u3002"}},"edit":{"header":{"title":"\u7de8\u8f2f\u5730\u9ede\uff1a%{node} | wheelmap.org"},"link":{"large_map":"&laquo; \u53d6\u6d88"}},"errors":{"default":"\u5509\u5440\uff01\u6709\u932f\u8aa4\u767c\u751f\u3002\u6211\u5011\u5df2\u56de\u5831\u9019\u500b\u554f\u984c","not_authorized":"\u62b1\u6b49\uff0c\u8a8d\u8b49\u5931\u6557","not_available":"\u62b1\u6b49\uff0c\u9019\u500b\u9801\u9762\u66ab\u6642\u4e0d\u80fd\u4f7f\u7528\u3002","not_existent":"\u62b1\u6b49\uff0c\u9019\u500b\u5730\u9ede\u5df2\u7d93\u5931\u6548\u4e86","not_found":"\u62b1\u6b49\uff0c\u6ca1\u6709\u627e\u5230\u9801\u9762","param_missing":"\u8acb\u8f38\u5165\u641c\u5c0b\u95dc\u9375\u5b57"},"flash":{"authorize_wheelmap":"\u60a8\u9700\u8981\u4e00\u500b OpenStreetMap \u5e33\u865f\u4ee5\u4fee\u6539\u8cc7\u6599"},"node":{"link":{"claim":"\u60a8\u5728\u9019\u88e1\u5de5\u4f5c\u55ce\uff1f","edit_node":"\u7de8\u8f2f\u5730\u9ede","report_bug":"\u56de\u5831\u4e00\u500b\u554f\u984c"}},"show":{"header":{"title":"\u5730\u9ede\uff1a %{node} | wheelmap.org"},"link":{"back":"\u56de\u4e0a\u4e00\u9801","large_map":"\u653e\u5927","listing":"\u5728 %{city} \u7684\u6240\u6709 '%{type}' ","upload":"\u4e0a\u50b3\u5716\u7247"},"more_data_from":"\u9019\u88e1\u6709\u66f4\u591a\u95dc\u65bc\u9019\u500b\u5730\u9ede\u7684\u8cc7\u8a0a\uff0c\u7d93\u78ba\u8a8d\uff1a","show-in-osm":"OpenStreetMap"},"update":{"flash":{"not_successfull":"\u5509\u5440\uff01\u60a8\u8f38\u5165\u7684\u8cc7\u8a0a\u4e0d\u6b63\u78ba\u6216\u4e0d\u5b8c\u6574","successfull":"\u8b1d\u8b1d\uff0c\u60a8\u63d0\u4f9b\u7684\u8cc7\u8a0a\u5df2\u6210\u529f\u5b58\u6a94\u4e26\u5f88\u5feb\u6703\u5728\u7dda\u4e0a\u986f\u793a\u3002"}},"update_wheelchair":{"successfull":"\"%{name}\"\u7684\u72c0\u614b\u5df2\u66f4\u6539\u70ba\"%{status}\"\uff0c\u4e26\u5f88\u5feb\u5728\u7dda\u4e0a\u986f\u793a\u3002"}},"application":{"require_no_user":{"notice":"\u60a8\u5df2\u7d93\u767b\u5165..."},"require_user":{"notice":"\u60a8\u5fc5\u9808\u767b\u5165\u624d\u80fd\u700f\u89bd\u9019\u500b\u9801\u9762\u3002"}},"breadcrumbs":{"node":{"create":"\u65b0\u589e\u5730\u9ede","edit":"\u7de8\u8f2f\u5730\u9ede"},"root":"wheelmap"},"common":{"close":"\u95dc\u9589","skip":"\u8df3\u904e"},"errors":{"dynamic_format":"%{message}","format":"%{attribute} %{message}","messages":{"accepted":"\u5fc5\u9808\u88ab\u63a5\u53d7","already_confirmed":"\u5df2\u78ba\u8a8d","blank":"\u5fc5\u9808\u586b\u5beb","confirmation":"\u8207\u78ba\u8a8d\u503c\u4e0d\u7b26\u5408","empty":"\u5fc5\u9808\u586b\u5beb","equal_to":"\u5fc5\u9808\u78ba\u5be6\u70ba%{count}","even":"\u5fc5\u9808\u662f\u5076\u6578","exclusion":"\u88ab\u4fdd\u7559","expired":"\u5df2\u7d93\u904e\u671f\uff0c\u8acb\u91cd\u65b0\u7533\u8acb","greater_than":"\u5fc5\u9808\u5927\u65bc %{count}","greater_than_or_equal_to":"\u5fc5\u9808\u5927\u65bc\u6216\u7b49\u65bc %{count}","inclusion":"\u7121\u6548\u6578\u503c","invalid":"\u7121\u6548","less_than":"\u5fc5\u9808\u5c0f\u65bc %{count}","less_than_or_equal_to":"\u5fc5\u9808\u5c11\u65bc\u6216\u7b49\u65bc %{count}","not_a_number":"\u4e0d\u662f\u6578\u5b57","not_an_integer":"\u5fc5\u9808\u662f\u6574\u6578","not_found":"\u6ca1\u6709\u627e\u5230","not_locked":"\u6c92\u6709\u88ab\u9396\u5b9a","not_saved":{"one":"\u56e0\u70ba1\u500b\u932f\u8aa4\u5c0e\u81f4\u6b64 %{resource} \u5b58\u6a94\u5931\u6557\uff1a","other":"\u56e0\u70ba %{count} \u500b\u932f\u8aa4\u5c0e\u81f4\u6b64 %{resource} \u5b58\u6a94\u5931\u6557\uff1a"},"odd":"\u5fc5\u9808\u70ba\u5947\u6578","taken":"\u5df2\u88ab\u4f7f\u7528","too_long":"\u592a\u9577 (\u4e0d\u80fd\u9577\u65bc %{count} \u5b57\u5143)","too_short":"\u592a\u77ed (\u4e0d\u80fd\u77ed\u65bc %{count} \u5b57\u5143)","wrong_length":"\u9577\u5ea6\u4e0d\u7b26 (\u5fc5\u9808\u70ba %{count} \u500b\u5b57\u5143) "},"template":{"body":"\u4ee5\u4e0b\u6b04\u4f4d\u51fa\u73fe\u554f\u984c\uff1a","header":{"one":"\u56e0\u70ba\u4e00\u500b\u932f\u8aa4\u5c0e\u81f4 %{model} \u7121\u6cd5\u5b58\u6a94","other":"%{count} \u500b\u932f\u8aa4\u5c0e\u81f4\u6b64 %{model} \u5b58\u6a94\u5931\u6557\u3002"}}},"flash":{"actions":{"create":{"notice":"%{resource_name} \u5df2\u7d93\u65b0\u589e"},"destroy":{"alert":"%{resource_name} \u4e0d\u80fd\u88ab\u522a\u9664","notice":"%{resource_name} \u5df2\u7d93\u6210\u529f\u5730\u88ab\u522a\u9664\u4e86"},"update":{"notice":"%{resource_name} \u5df2\u6210\u529f\u66f4\u65b0"}},"photos":{"destroy":{"notice":"\u6210\u529f\u522a\u9664\u5716\u7247"}}},"form":{"show_fully_accessible_places":"\u8f2a\u6905\u7121\u969c\u7919","show_limited_accessible_places":"\u90e8\u5206\u8f2a\u6905\u7121\u969c\u7919","show_places_without_status":"\u672a\u77e5\u72c0\u614b","show_unaccessible_places":"\u975e\u8f2a\u6905\u7121\u969c\u7919"},"formtastic":{"hints":{"email":"\u6211\u5011\u6703\u4fdd\u5bc6\u60a8\u7684\u5730\u5740\uff0c\u4e0d\u6703\u5bc4\u5783\u573e\u4fe1\u4ef6\u7d66\u60a8\u3002\u4fdd\u8b49\uff01","lat":"\u5c07\u5716\u793a\u79fb\u52d5\u5230\u5730\u5716\u4e0a\u6b63\u78ba\u4f4d\u7f6e","osm_username":"\u9084\u4e0d\u662f\u6703\u54e1\u55ce\uff1f <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">\u73fe\u5728\u5c31\u7533\u8acb OpenStreetMap \u7684\u6703\u54e1 </a>","password":"(\u5982\u679c\u4f60\u4e0d\u60f3\u66f4\u52d5\uff0c\u8acb\u4fdd\u6301\u7a7a\u767d)","phone":"\u4f8b\u5982\uff1a+886 6 1234567-8","website":"\u4f8b\u5982\uff1ahttp://www.example.com"},"labels":{"category":"\u5206\u985e\uff1a","city":"\u57ce\u5e02\uff1a","create":"\u65b0\u589e\u5730\u9ede","email":"\u96fb\u5b50\u90f5\u4ef6","finish":"\u5b8c\u6210","housenumber":"\u9580\u724c\u865f\u78bc\uff1a","lat":"\u7def\u5ea6","lon":"\u7d93\u5ea6","name":"\u540d\u5b57\uff1a","osm_password":"OpenStreetMap \u7684\u5bc6\u78bc","osm_username":"OSM \u5e33\u865f","password":"\u5bc6\u78bc ","password_confirmation":"\u91cd\u8907\u5bc6\u78bc","phone":"\u96fb\u8a71\uff1a","postcode":"\u90f5\u905e\u5340\u865f\uff1a","privacy_policy":"\u6211\u63a5\u53d7\u6578\u64da\u96b1\u79c1\u5354\u8b70\u7684\u7b2c1\u53ca\u7b2c2\u6bb5","reset":"\u91cd\u8a2d","save":"\u5b58\u6a94","street":"\u8857\u9053\uff1a","terms":"\u6211\u63a5\u53d7\u6b64\u4f7f\u7528\u689d\u6b3e","type":"\u7a2e\u985e\uff1a","website":"\u7db2\u7ad9\uff1a","wheelchair":"\u8f2a\u6905\u7121\u969c\u7919\uff1f","wheelchair_description":"\u7121\u969c\u7919\u8aaa\u660e\uff1a"},"titles":{"basic":"\u57fa\u672c\u8cc7\u6599","optional":"\u66f4\u591a\u8cc7\u8a0a <span class=\"addition\">(all fields are optional)</span>"}},"global":{"form_validation_error":"\u8acb\u6ce8\u610f\u4e0b\u5217\u932f\u8aa4"},"helpers":{"select":{"prompt":"\u8acb\u9078\u64c7"},"submit":{"create":"\u65b0\u589e %{model}","submit":"\u5132\u5b58 %{model}","update":"\u66f4\u65b0 %{model}"}},"how?":"\u5982\u4f55\uff1f","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"%{city} \u7684\u6240\u6709\u90e8\u5206\u8f2a\u6905\u7121\u969c\u7919%{type} (%{count})"},"no":{"headline":"%{city} \u7684\u6240\u6709\u975e\u8f2a\u6905\u7121\u969c\u7919 %{type} (%{count})"},"unknown":{"headline":"%{city} \u7684\u6240\u6709\u8f2a\u6905\u7121\u969c\u7919\u74b0\u5883\u4e0d\u78ba\u5b9a\u7684 %{type} (%{count})"},"yes":{"headline":"%{city} \u4e2d\u6240\u6709\u8f2a\u6905\u7121\u969c\u7919\u7684 %{type} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"\u4e00\u500b Sozialhelden.de \u7684\u5c08\u6848"}}},"node":{"address":{"city":"%{city} %{postcode}","street":"%{street} %{housenumber}"},"tags":{"phone":"\u96fb\u8a71\uff1a","website":"\u7db2\u7ad9\uff1a"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":0,"strip_insignificant_zeros":0,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":0,"strip_insignificant_zeros":0},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"\u5341\u5104","million":"\u767e\u842c","quadrillion":"\u5343\u5146","thousand":"\u5343","trillion":"\u5146","unit":" "}},"format":{"delimiter":" ","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}}},"oauth":{"application":{"connect":{"headline":"\u82e5\u60a8\u8981\u5728 Wheelmap.org \u65b0\u589e\u6216\u4fee\u6539\u5730\u9ede\uff0c\u9700\u5148\u5c07\u60a8\u7684\u5e33\u865f\u9023\u63a5\u5230 'OpenStreetMap.org'"}},"callback":{"notice":"\u60a8\u7684 Wheelmap \u5e33\u865f\u73fe\u5728\u5df2\u9023\u63a5\u5230 OpenStreetMap \u5e33\u865f %{user}"}},"or":"\u6216","place":{"one":"%{count} \u5730\u9ede","other":"%{count} \u500b\u5730\u9ede"},"profile":{"edit":{"application":{"oauth":{"connected":"\u72c0\u614b\uff1a\u5df2\u9023\u7d50","grant":"\u73fe\u5728\u5c31\u9023\u7d50","not_connected":"\u72c0\u614b\uff1a\u672a\u9023\u7d50","revoke":"\u4e2d\u65b7\u9023\u7d50"}},"headline":"\u7de8\u8f2f\u4f60\u7684\u500b\u4eba\u6a94\u6848"}},"search":{"index":{"search":{"for":"\u641c\u5c0b \"%{q}\"","not_found":"\u6ca1\u6709\u627e\u5230\u5730\u9ede!"}}},"splash":{"countline":"%{count} \u500b\u5730\u9ede\u5df2\u88ab\u6a19\u8a18","headline":"\u6bcf\u500b\u4eba\u90fd\u53ef\u4ee5\u65b0\u589e\u8f2a\u6905\u7121\u969c\u7919\u7a7a\u9593\uff01","start":"\u958b\u59cb","step1":"\u9ede\u9078\u4e00\u500b\u60a8\u77e5\u9053\u7684\u5730\u9ede","step2":"\u6a19\u793a\u7136\u5f8c\u9ede\u9078\u5b58\u6a94","step3":"\u5c31\u9019\u6a23\uff01\u514d\u8a3b\u518a","what_is_wheelmap":"Wheelmap \u662f\u4ec0\u9ebc\uff1f"},"statistics":"\u7d71\u8a08","support":{"array":{"last_word_connector":"\u548c","sentence_connector":"\u548c","skip_last_comma":true,"two_words_connector":"\u548c","words_connector":", "},"select":{"prompt":"\u8acb\u9078\u64c7"}},"time":{"am":"\u65e9\u4e0a","formats":{"default":"%Y - %b -%d %a %H:%M:%S %z","long":"%Y - %B -%d %H:%M","short":"%d %b %H:%M"},"pm":"\u4e0b\u5348"},"user_sessions":{"create":{"activation":{"notice":"\u60a8\u7684\u5e33\u865f\u5df2\u88ab\u555f\u52d5"},"error":{"notice":"\u96fb\u5b50\u4fe1\u7bb1\u548c\u5bc6\u78bc\u4e0d\u76f8\u7b26"},"notice":"\u60a8\u5df2\u767b\u5165\uff01"},"destroy":{"notice":"\u518d\u898b\uff0c\u6b61\u8fce\u518d\u5ea6\u5149\u81e8\uff01"},"new":{"email":"E-mail \u5e33\u865f","login":"\u767b\u5165","login_with_twitter":"\u900f\u904e Twitter \u767b\u5165","password":"\u5bc6\u78bc","remember_me":"\u4fdd\u6301\u767b\u5165\u72c0\u614b"}},"users":{"after_signup_edit":{"welcome":{"headline":"\u6b61\u8fce\u5149\u81e8 Wheelmap","set_password_for_mobile":"\u4f60\u6709\u667a\u6167\u578b\u624b\u6a5f\u55ce\uff1f\u8acb\u5efa\u7acb\u4e00\u500b\u5bc6\u78bc\u4ee5\u4fbf\u5728 iPhone \u6216 Android \u624b\u6a5f\u4e0a\u64cd\u4f5c Wheelmap\u3002","text":"\u6211\u5011\u8981\u5982\u4f55\u548c\u60a8\u806f\u7e6b\uff1f\u60a8\u53ef\u4ee5\u5728\u4e4b\u5f8c\u4fee\u6539\u60a8\u7684\u500b\u4eba\u6a94\u6848\u3002"}},"edit":{"headline":{"your_images":"\u4f60\u4e0a\u50b3\u7684\u5f71\u50cf"}}},"wheelchairstatus":{"limited":"\u90e8\u5206\u8f2a\u6905\u7121\u969c\u7919","no":"\u975e\u8f2a\u6905\u7121\u969c\u7919","unknown":"\u672a\u77e5\u72c0\u614b","yes":"\u8f2a\u6905\u7121\u969c\u7919"},"wheelmap":{"footer":{"a_project_of":"\u4e00\u500b\u5c08\u6848 by ","based_on":"\u57fa\u65bc","become_a_supporter":"\u6210\u70ba\u652f\u6301\u8005","main_supporter":"\u4e3b\u8981\u652f\u6301\u8005"},"itunes":{"alt":"AppStore Logo","title":"\u73fe\u5728\u5c31\u4e0b\u8f09 iPhone App\uff01"},"logo":{"alt":"Wheelmap logo\uff0d\u5c0b\u627e\u8f2a\u6905\u7121\u969c\u7919\u7a7a\u9593","title":"Wheelmap\uff0d\u5c0b\u627e\u8f2a\u6905\u7121\u969c\u7919\u7a7a\u9593"},"what_is":{"fully_accessible":"\u5165\u53e3\u6c92\u6709\u53f0\u968e\uff0c\u6240\u6709\u623f\u9593\u90fd\u6c92\u6709\u53f0\u968e\uff0c\u5ec1\u6240\u7121\u969c\u7919","limited_accessible":"\u5165\u53e3\u6709\u4e00\u968e\u53f0\u968e (\u6700\u9ad8 7 \u516c\u5206)\uff0c\u5927\u90e8\u5206\u623f\u9593\u6c92\u6709\u53f0\u968e\uff0c\u7121\u6cd5\u4ee5\u8f2a\u6905\u9032\u5165\u5ec1\u6240","not_accessible":"\u5165\u53e3\u6709\u968e\u68af\uff0c\u623f\u9593\u4e0d\u80fd\u4ee5\u8f2a\u6905\u9032\u5165","unknown_accessible":"\u8acb\u5e6b\u5fd9\u6a19\u8a18"}},"will_paginate":{"next_label":"\u5f80\u5f8c &#8594;","page_entries_info":{"multi_page":"\u986f\u793a %{model} %{from} - %{to} \uff0c\u4e00\u5171\u6709 %{count}","multi_page_html":"\u986f\u793a %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>\uff0c\u4e00\u5171\u6709 <b>%{count}</b> ","single_page":{"one":"\u986f\u793a1 %{model}","other":"\u986f\u793a\u5168\u90e8%{count} %{model}","zero":"\u6ca1\u627e\u5230%{model}"},"single_page_html":{"one":"\u986f\u793a <b>1</b> \u500b %{model}","other":"\u5c55\u793a <b>\u5168\u90e8\u7684&nbsp;%{count}</b> %{model}","zero":"\u6ca1\u627e\u5230%{model}"}},"page_gap":"&hellip;","previous_label":"&#8592; \u5f80\u524d"}}};